import { useState, useEffect } from 'preact/hooks'

const BT = '`'

// tail lines 0-4 change per frame; body lines 5-13 stay fixed
// lean left = \| chars, each line 1 col further right going down (tip swings left)
// lean right = /| chars, each line 1 col further left going down (tip swings right)
// mid frames: top 2 segments lean, bottom 2 straight — creates more articulated wag

const TAIL_FAR_LEFT = String.raw`                   _
                   \|
                    \|
                     \|
  |\                  \|
 /, ~\                / /
X     ${BT}-.....-------./ /
 ~-. ~  ~              |
    \             /    |
     \  /_     ___\   /
     | /\ ~~~~~   \ |
     | | \        || |
     | |\ \       || )
    (_/ (_/      ((_/`

const TAIL_MID_LEFT = String.raw`                     _
                     \|
                      \|
                       | |
  |\                   | |
 /, ~\                / /
X     ${BT}-.....-------./ /
 ~-. ~  ~              |
    \             /    |
     \  /_     ___\   /
     | /\ ~~~~~   \ |
     | | \        || |
     | |\ \       || )
    (_/ (_/      ((_/`

const TAIL_CENTER = String.raw`                        _
                       | \
                       | |
                       | |
  |\                   | |
 /, ~\                / /
X     ${BT}-.....-------./ /
 ~-. ~  ~              |
    \             /    |
     \  /_     ___\   /
     | /\ ~~~~~   \ |
     | | \        || |
     | |\ \       || )
    (_/ (_/      ((_/`

const TAIL_MID_RIGHT = String.raw`                          _
                         /|
                        /|
                       | |
  |\                   | |
 /, ~\                / /
X     ${BT}-.....-------./ /
 ~-. ~  ~              |
    \             /    |
     \  /_     ___\   /
     | /\ ~~~~~   \ |
     | | \        || |
     | |\ \       || )
    (_/ (_/      ((_/`

const TAIL_FAR_RIGHT = String.raw`                            _
                           /|
                          /|
                         /|
  |\                    /|
 /, ~\                / /
X     ${BT}-.....-------./ /
 ~-. ~  ~              |
    \             /    |
     \  /_     ___\   /
     | /\ ~~~~~   \ |
     | | \        || |
     | |\ \       || )
    (_/ (_/      ((_/`

const FRAMES = [TAIL_FAR_LEFT, TAIL_MID_LEFT, TAIL_CENTER, TAIL_MID_RIGHT, TAIL_FAR_RIGHT]
const SEQ = [0, 1, 2, 3, 4, 3, 2, 1]

export function AsciiCat() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setStep(s => (s + 1) % SEQ.length), 200)
    return () => clearInterval(id)
  }, [])

  return <pre className="ascii-cat">{FRAMES[SEQ[step]]}</pre>
}
