export interface BadgeProps {
  badge: string;
}

export const Badge = ({badge}: BadgeProps) => (
  <img
    src={`/badges/${badge}.png`}
    alt={`The ${badge} badge`}
    width={80}
    height={15}
  />
);

export const AnimatedBadge = ({badge}: BadgeProps) => (
  <img
    src={`/badges/${badge}.gif`}
    alt={`The ${badge} animated badge`}
    width={80}
    height={15}
  />
);

export const BigBadge = ({badge}: BadgeProps) => (
  <img
    src={`/badges/${badge}.png`}
    alt={`The ${badge} badge`}
    width={88}
    height={31}
  />
);

export const BigAnimatedBadge = ({badge}: BadgeProps) => (
  <img
    src={`/badges/${badge}.gif`}
    alt={`The ${badge} badge`}
    width={88}
    height={31}
  />
);