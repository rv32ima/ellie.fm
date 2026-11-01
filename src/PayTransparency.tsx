type Job = {
  employer: string
  role: string
  dates: string
  comp: string
  leave: string
}

const JOBS: Job[] = [
  { employer: 'Pinterest', role: 'Senior Machine Learning Platform Engineer', dates: '02/2026 – present', comp: '~$414,000 ($251,680 salary + ~$163,000/yr RSUs, $361,434.57 over 4 years)', leave: 'N/A' },
  { employer: 'tvScientific', role: 'Lead Machine Learning Platform Engineer', dates: '08/2025 – 02/2026', comp: '$231,000 ($210,000 salary + $21,000 bonus) + 52,500 shares', leave: 'acquired by Pinterest' },
  { employer: 'tvScientific', role: 'Contractor', dates: '08/2025', comp: '$95/hr ($197,800 annualized)', leave: 'moved to salaried role' },
  { employer: 'DevZero', role: 'Member of Technical Staff', dates: '04/2024 – 08/2025', comp: '$210,000 salary + 39,400 shares', leave: 'resigned' },
  { employer: 'DevZero', role: 'Member of Technical Staff', dates: '04/2024 – 10/2024', comp: '$170,000 salary + 39,400 shares', leave: 'raise' },
  { employer: 'DevZero', role: 'Contractor', dates: '03/2024 – 04/2024', comp: '$60/hr ($124,800 annualized)', leave: 'moved to salaried role' },
  { employer: 'Paradoxum Games', role: 'Principal Business Infrastructure Engineer', dates: '01/2024 – 04/2024', comp: '$150,000 salary + discretionary bonuses ($10–12k/pay period)', leave: 'left the company' },
  { employer: 'Paradoxum Games', role: 'Site Reliability Engineer', dates: '07/2023 – 01/2024', comp: '$90,000 salary', leave: 'promoted' },
  { employer: 'Synapse Softworks LLC', role: 'Technical Product Manager', dates: '04/2023 – 07/2023', comp: '$50,400 salary', leave: 'resigned' },
  { employer: 'Synapse Softworks LLC', role: 'Systems Administrator', dates: '08/2022 – 04/2023', comp: 'revenue share (~$10–15k/2wk, ~$360k/yr)', leave: 'moved to a new role' },
  { employer: 'Synapse Softworks LLC', role: 'Systems Administrator', dates: '06/2022 – 08/2022', comp: '$60/hr ($124,800 annualized)', leave: 'promoted' },
  { employer: 'Symmetry Investments', role: 'Consultant', dates: '08/2021 – 07/2022', comp: '$52/hr ($108,160 annualized)', leave: 'resigned' },
  { employer: 'Premiere Digital Services', role: 'Consultant', dates: '10/2020 – 12/2021', comp: '$25/hr ($52,000 annualized)', leave: 'resigned' },
]

export function PayTransparency() {
  return (
    <main className="pay-page">
      <a href="/" className="pay-back">← back</a>

      <div className="section-title">── [ pay transparency ]</div>

      <p className="pay-intro">
        pay transparency deeply matters to me. i've watched pay discrimination
        happen firsthand — the kind where "business reasons" mysteriously result in trans
        & POC engineers being downleveled and underpaid relative to their peers.
        and it's happened to me!
      </p>
      <p className="pay-intro">
        knowing what other people make is one of the few levers workers have to push back
        against that dynamic. when i was starting out, i had no idea how to value my own time,
        and that ignorance cost me a lot of money over the first few years of my career.
        this page exists so it doesn't have to cost you the same.
      </p>
      <p className="pay-intro">
        below is every job i've held since i started my career in 2020, what i was paid,
        and why i left. inspired by{' '}
        <a href="https://xeiaso.net/salary-transparency/">xe iaso's salary transparency page</a>.
      </p>

      <div className="pay-table-wrap">
        <table className="pay-table">
          <thead>
            <tr>
              <th>employer</th>
              <th>role</th>
              <th>dates</th>
              <th>total annual compensation</th>
              <th>why i left</th>
            </tr>
          </thead>
          <tbody>
            {JOBS.map((job, i) => (
              <tr key={i}>
                <td className="pay-employer">{job.employer}</td>
                <td>{job.role}</td>
                <td className="pay-dates">{job.dates}</td>
                <td className="pay-comp">{job.comp}</td>
                <td className="pay-leave">{job.leave}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}
