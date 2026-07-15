"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import {
  DEFAULT_TEAM_IMAGE_POSITION,
  membersForTab,
  teamTabs,
  type TeamDepartment,
  type TeamMember,
} from "@/data/team";

function teamImageStyle(member: TeamMember): CSSProperties {
  return {
    objectPosition: member.imagePosition ?? DEFAULT_TEAM_IMAGE_POSITION,
  };
}

function TeamCard({
  member,
  onOpen,
}: {
  member: TeamMember;
  onOpen: (member: TeamMember) => void;
}) {
  return (
    <article className="flex h-full w-full min-w-0 flex-col">
      <button
        type="button"
        onClick={() => onOpen(member)}
        className="group flex h-full w-full min-w-0 cursor-pointer flex-col overflow-hidden rounded-[20px] bg-white text-left shadow-sm transition-shadow hover:shadow-lg hover:shadow-ardent-blue/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ardent-blue"
        aria-haspopup="dialog"
        aria-label={`View full bio for ${member.name}`}
      >
        {/*
          Fixed frame + object-cover + per-person object-position.
          Accommodates mixed client crops (tight face vs torso) without reshooting.
        */}
        <div className="relative h-[360px] w-full shrink-0 overflow-hidden bg-ardent-light max-lg:h-[370px]">
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="(max-width: 1024px) 100vw, 30vw"
            style={teamImageStyle(member)}
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>
        <div className="flex flex-1 flex-col gap-1.5 p-5 max-lg:p-4">
          <h3 className="text-heading-3 line-clamp-2 font-bold leading-snug text-[#333]">
            {member.name}
          </h3>
          {/* Allow up to 3 lines so long titles don't ellipsize mid-word */}
          <p className="line-clamp-3 min-h-[3.9rem] text-[0.9375rem] leading-[1.3] text-charcoal">
            {member.title}
          </p>
          <span className="mt-auto pt-2 text-[0.9375rem] font-bold text-ardent-blue group-hover:underline">
            View bio
          </span>
        </div>
      </button>
    </article>
  );
}

function BioModal({
  member,
  onClose,
  titleId,
}: {
  member: TeamMember;
  onClose: () => void;
  titleId: string;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key !== "Tab" || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 max-lg:items-end max-lg:p-0"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-ardent-blue/60 backdrop-blur-[2px]"
        aria-label="Close bio dialog"
        onClick={onClose}
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 flex max-h-[min(90dvh,840px)] w-full max-w-[720px] flex-col overflow-hidden rounded-[20px] bg-white shadow-2xl max-lg:max-h-[92dvh] max-lg:rounded-b-none max-lg:rounded-t-[20px]"
      >
        <div className="flex items-start justify-between gap-4 border-b border-ardent-blue/10 px-8 py-5 max-lg:px-6">
          <div className="min-w-0">
            <h3 id={titleId} className="text-heading-2 font-bold text-ardent-blue">
              {member.name}
            </h3>
            <p className="text-body mt-1 text-charcoal">{member.title}</p>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="text-small shrink-0 rounded-md border border-ardent-blue px-3 py-2 font-medium uppercase text-ardent-blue transition-colors hover:bg-ardent-light"
          >
            Close
          </button>
        </div>

        <div className="flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto px-8 py-6 max-lg:px-6 sm:flex-row">
          <div className="relative mx-auto h-[250px] w-full max-w-[200px] shrink-0 overflow-hidden rounded-[20px] sm:mx-0 sm:h-[280px] sm:w-[200px]">
            <Image
              src={member.image}
              alt={member.name}
              fill
              sizes="200px"
              style={teamImageStyle(member)}
              className="object-cover"
              priority
            />
          </div>
          <div className="min-w-0 flex-1 space-y-4">
            <p className="text-body leading-[1.7] text-charcoal/90">{member.bio}</p>
            {member.email ? (
              <a
                href={`mailto:${member.email}`}
                className="inline-block text-[1rem] font-bold text-ardent-blue break-words hover:underline"
              >
                {member.email}
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Team() {
  const [activeTab, setActiveTab] = useState<TeamDepartment>("Team");
  const [selected, setSelected] = useState<TeamMember | null>(null);
  const titleId = useId();

  const visible = membersForTab(activeTab);

  const openBio = useCallback((member: TeamMember) => {
    setSelected(member);
  }, []);

  const closeBio = useCallback(() => {
    setSelected(null);
  }, []);

  return (
    <section id="team" className="w-full">
      <div className="mx-auto flex w-full max-w-[65%] flex-col items-center gap-20 max-lg:max-w-full max-lg:px-6">
        <h2 className="text-heading-1 text-center font-bold text-ardent-blue">
          Leadership & Team
        </h2>

        <div className="flex w-full items-start gap-6 max-lg:flex-col">
          <div
            className="flex w-[280px] shrink-0 flex-col gap-1.5 max-lg:w-full max-lg:flex-row max-lg:flex-nowrap max-lg:gap-2 max-lg:overflow-x-auto max-lg:pb-1 max-lg:[-webkit-overflow-scrolling:touch]"
            role="tablist"
            aria-label="Team departments"
          >
            {teamTabs.map((tab) => {
              const selectedTab = activeTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={selectedTab}
                  id={`team-tab-${tab.replace(/\s+/g, "-").toLowerCase()}`}
                  onClick={() => setActiveTab(tab)}
                  className={`text-body flex w-full cursor-pointer items-center rounded-[16px] px-5 py-4 text-left font-bold leading-snug transition-colors max-lg:w-auto max-lg:shrink-0 max-lg:whitespace-nowrap max-lg:px-4 max-lg:py-3 max-lg:text-[0.9375rem] ${
                    selectedTab
                      ? "bg-ardent-blue text-white"
                      : "bg-ardent-light text-ardent-blue hover:bg-ardent-blue/10"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          <div
            className="min-w-0 w-full flex-1 rounded-[20px] bg-ardent-light p-11.5 max-lg:p-6"
            role="tabpanel"
            aria-labelledby={`team-tab-${activeTab.replace(/\s+/g, "-").toLowerCase()}`}
          >
            {visible.length === 0 ? (
              <p className="text-body text-center text-charcoal">
                Team profiles for this group will appear here soon.
              </p>
            ) : (
              <div className="grid grid-cols-2 items-stretch gap-5 max-lg:grid-cols-1 max-lg:gap-5">
                {visible.map((member) => (
                  <TeamCard key={member.id} member={member} onOpen={openBio} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {selected ? (
        <BioModal member={selected} onClose={closeBio} titleId={titleId} />
      ) : null}
    </section>
  );
}
