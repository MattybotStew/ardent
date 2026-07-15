/**
 * Renders public SVG assets with a bare <img>.
 * next/image does not optimize SVGs from /public; project rules require <img> for logo/maps.
 */
/* eslint-disable @next/next/no-img-element */
export default function SvgImg({
  src,
  alt,
  width,
  height,
  className,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}) {
  return (
    <img src={src} alt={alt} width={width} height={height} className={className} />
  );
}
