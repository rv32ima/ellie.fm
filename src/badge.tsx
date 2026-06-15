export interface BadgeProps {
  badge: string;
  href?: string;
}

export const Badge = ({badge, href}: BadgeProps) => (
  <a href={href}><img
    src={`/badges/${badge}.png`}
    alt={`The ${badge} badge`}
    width={80}
    height={15}
  /></a>
);

export const AnimatedBadge = ({badge, href}: BadgeProps) => (
  <a href={href}><img
    src={`/badges/${badge}.gif`}
    alt={`The ${badge} animated badge`}
    width={80}
    height={15}
  /></a>
);

export const BigBadge = ({badge, href}: BadgeProps) => (
  <a href={href}><img
    src={`/badges/${badge}.png`}
    alt={`The ${badge} badge`}
    width={88}
    height={31}
  /></a>
);

export const BigAnimatedBadge = ({badge, href}: BadgeProps) => (
  <a href={href}><img
    src={`/badges/${badge}.gif`}
    alt={`The ${badge} badge`}
    width={88}
    height={31}
  /></a>
);
