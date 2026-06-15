import { MutableRef, useRef } from "preact/hooks";
import { AnimatedBadge, Badge, BigBadge, BigAnimatedBadge } from "./badge";
import type { ComponentChildren } from "preact";

type LinkProps = {
  clickRef: MutableRef<HTMLAudioElement | null>
  children: ComponentChildren
  href?: string
}

const Link = ({ clickRef, children, href }: LinkProps) => {
  const visit = () => {
    if (!href) return;
    let elem = document.createElement("a");
    elem.href = href;
    elem.click();
  };
  return (
    <a onClick={(e) => {
      e.preventDefault();
      if (clickRef.current === null) { visit(); return; }
      clickRef.current!.addEventListener('ended', () => { visit(); });
      clickRef.current!.play();
      setTimeout(visit, 300);
    }} href={href}>
      {children}
    </a>
  );
};

const Section = ({ title, children }: { title: string; children: ComponentChildren }) => (
  <div className="section">
    <div className="section-title">── [ {title} ]</div>
    <div className="section-body">{children}</div>
  </div>
);

// null = separator line (────); box width auto-sizes to longest text line
const HEADER_LINES: (string | null)[] = [
  '',
  'catmod.ing',
  null,
  '23yo trans catgirl // seattle, wa',
  '',
  'hi! welcome to the kitty den ^_^',
  '',
]

function buildHeader(lines: (string | null)[]): string {
  const textLines = lines.filter((l): l is string => l !== null)
  const maxLen = Math.max(0, ...textLines.map(l => l.length))
  const inner = maxLen + 6  // 2 spaces padding each side
  const top    = '╔' + '═'.repeat(inner) + '╗'
  const bottom = '╚' + '═'.repeat(inner) + '╝'
  const sep    = '║  ' + '─'.repeat(inner - 4) + '  ║'
  return [top, ...lines.map(l => l === null ? sep : '║  ' + l.padEnd(inner - 2) + '║'), bottom].join('\n')
}

export function App() {
  const clickSound = useRef<HTMLAudioElement | null>(null);
  const headerRef = useRef<HTMLPreElement>(null);

  const SocialLink = ({ type, href, text }: { type: string; href: string; text?: string }) => {
    const url = URL.parse(href)!;
    const parts = url.pathname.split('/');
    const inner = text ?? parts[parts.length - 1];
    return (
      <div className="entry">
        <span className="entry-key">{type}:</span>{' '}
        <Link href={href} clickRef={clickSound}>{inner}</Link>
      </div>
    );
  };

  const ClickLink = ({ children, href }: Partial<LinkProps>) => (
    <Link clickRef={clickSound} children={children} href={href} />
  );

  return (
    <main>
      <audio src="/wrenchHit.wav" ref={clickSound} preload="auto" />
      <script src="https://t4t.net/trans-flag-bounce.js" data-theme="lesbian" />

      <pre className="site-header" ref={headerRef}>{buildHeader(HEADER_LINES)}</pre>

      <Section title="internet profiles">
        <SocialLink type="last.fm" href="https://www.last.fm/user/kittydigital" />
        <SocialLink type="bluesky" href="https://bsky.app/profile/catmod.ing" />
      </Section>

      <Section title="links">
        <div className="entry">
          <ClickLink href="/pay_transparency.html">pay transparency document</ClickLink>
        </div>
        <div className="entry">
          <ClickLink href="https://t4t.net">t4t.net // an experimental autonomous network for trans people</ClickLink>
        </div>
      </Section>

      <div className="section">
        <div className="section-title">── [ badges ]</div>
        <div className="badges">
          <AnimatedBadge badge="fl_jap" />
          <AnimatedBadge badge="fl_usa2" />
          <AnimatedBadge badge="anarchist_copy" />
          <AnimatedBadge badge="best_viewed" />
          <AnimatedBadge badge="eff2" />
          <AnimatedBadge badge="gmail_copy1" />
          <Badge badge="Hhacker" />
          <Badge badge="punk_software" />
          <Badge badge="andro" />
          <Badge badge="javascript" />
          <AnimatedBadge badge="mac_micro" />
        </div>
        <div className="badges big-badges">
          <BigAnimatedBadge badge="trans" />
          <BigAnimatedBadge badge="lesbian" />
          <BigAnimatedBadge badge="powered-by-estrogen" href="https://symphonylabs.cc/" />
          <BigAnimatedBadge badge="powered-by-nixos" href="https://nixos.org/" />
          <BigBadge badge="powered-by-blahaj" href="https://www.ikea.com/us/en/p/blahaj-soft-toy-shark-90373590/" />
          <BigAnimatedBadge badge="acab" />
          <BigAnimatedBadge badge="anarchynow" />
          <BigAnimatedBadge badge="macosmade" />
          <BigAnimatedBadge badge="this_website_gay" />
          <BigAnimatedBadge badge="defund_badge" />
          <BigAnimatedBadge badge="webpassion" />
          <BigAnimatedBadge badge="soulseek" href="https://www.slsknet.org" />
        </div>
      </div>
    </main>
  );
}
