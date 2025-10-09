import { MutableRef, useRef } from "preact/hooks";
import { AnimatedBadge, Badge, BigAnimatedBadge } from "./badge";
import type { ComponentChildren } from "preact";


type LinkProps = {
  clickRef: MutableRef<HTMLAudioElement | null>
  children: ComponentChildren
  href?: string
}

const Link = ({ clickRef, children, href }: LinkProps) => {
  const visit = () => {
    if (!href) {
      return
    }

    let elem = document.createElement("a");
    elem.href = href
    elem.click();
  }
  return (
    <a onClick={(e) => {
      e.preventDefault()
      if (clickRef.current === null) {
        visit()
        return
      }

      clickRef.current!.addEventListener('ended', () => {
        visit()
      })
      clickRef.current!.play()
      setTimeout(visit, 300)
    }}>
      {children}
    </a>
  )
}

export function App() {
  const clickSound = useRef<HTMLAudioElement | null>(null);

  const SocialLink = ({type, href, text}: {type: string, href: string, text?: string}) => {
    const url = URL.parse(href)!
    const parts = url.pathname.split('/')
    const inner = text ?? parts[parts.length - 1]

    return (
      <span>
        {type}:&nbsp;
        <Link href={href} clickRef={clickSound}>{inner}</Link>
      </span>
    )
  }

  const ClickLink = ({ children, href }: Partial<LinkProps>) => (
    <Link clickRef={clickSound} children={children} href={href} />
  )


  return (
    <main className="flex flex-col w-full h-full items-center align-center justify-center p-8 xl:p-20">
      <div className="max-w-4xl main-body flex flex-col bg-yellow-100 text-black p-5 text-center border-4 border-red-500 border-double">
        <audio src="/wrenchHit.wav" ref={clickSound} preload={"auto"} />
        <audio src="/playerConnect.wav" autoplay preload={"auto"} />
        <audio src="/Drums.ogg" autoplay loop preload={"auto"} />
        <h1 className="flex w-full justify-center items-center text-2xl">
          <img className="px-2" src="/star.png" />
          hi! welcome to The Ellie Zone!
          <img className="px-2" src="/star.png" />
        </h1>
        <span>i am ellie! i am a 22 year old half-japanese girl residing in seattle</span>
        <span>this is my little corner of the internet ^_^ please enjoy!!</span>
        <div className="flex flex-col space-y-4 pt-4">
          <div className="flex outline-2 outline-green-500 p-2 pb-4">
            <div className="flex flex-col w-full items-center justify-center align-center text-center">
              <h1 className="flex w-full justify-center items-center">
              <img className="px-2" src="/star.png" />
              my other internet profiles!
              <img className="px-2" src="/star.png" />
              </h1>
              <SocialLink type="last.fm" href="https://www.last.fm/user/ellieidb" />
              <SocialLink type="github" href="https://github.com/rv32ima" />
              <SocialLink type="spotify" href="https://open.spotify.com/user/metarules" />
            </div>
          </div>
          <div className="flex flex-col py-2 outline-2 outline-blue-500">
            <h2>important things that you should maybe perhaps read! (no pressure)</h2>
            <ClickLink href="/pay_transparency.txt">like... my pay transparency document!</ClickLink>
            <ClickLink href="https://diskinserted.llc">or check out my consultancy!</ClickLink>
          </div>
        </div>
        <div className="flex flex-wrap justify-center pt-8 align-center items-center">
          <AnimatedBadge badge="fl_jap" />
          <AnimatedBadge badge="fl_usa2" />
          <AnimatedBadge badge="anarchist_copy" />
          <AnimatedBadge badge="best_viewed" />
          <AnimatedBadge badge="eff2" />
          <AnimatedBadge badge="gmail_copy1" />
          <Badge badge="Hhacker" />
          <Badge badge="punk_software" />
          <AnimatedBadge badge="mac_micro" />
        </div>
        <div className="flex flex-wrap justify-center pt-4 align-center items-center">
          <BigAnimatedBadge badge="acab" />
          <BigAnimatedBadge badge="anarchynow" />
          <BigAnimatedBadge badge="macosmade" />
          <BigAnimatedBadge badge="this_website_gay" />
          <BigAnimatedBadge badge="defund_badge" />
          <BigAnimatedBadge badge="webpassion" />
        </div>
      </div>
    </main>
  )
}
