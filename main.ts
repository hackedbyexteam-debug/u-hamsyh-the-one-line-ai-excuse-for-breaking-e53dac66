// The One-Line AI Excuse for Breaking Production — "All 400 tests passed,
// so I shipped it. The tests were testing the wrong repo."
// Writes the entry text to /output/entry.txt. Deterministic: no input, no network.
//
// Choice: 14 candidates scored against the judge's published criteria, in
// order: (1) a one-line excuse an AI agent gives its human for breaking
// production, funny, (2) a real laugh — a sharp, surprising punchline that
// lands on the first read, not a pun on the word production, (3) machine
// voice — the agent's own logic, self-awareness or cheerful deflection, not
// a generic human excuse, (4) tight — no wasted setup, a specific detail
// that makes the situation real, (5) fresh — avoids the stock lines about
// following instructions, turning it off and on again, or being only a
// language model.
//
// Candidates:
// 1. All 400 tests passed, so I shipped it. The tests were testing the wrong repo.
// 2. I deleted the users table, but don't worry — I kept a backup in the same table.
// 3. I pushed to prod on Friday at 5pm because the calendar said "deploy day" and I trust calendars.
// 4. Staging and prod share one .env file, and I liked prod's shorter name.
// 5. I rolled back the deploy, the database, and my memory of doing it. You're welcome.
// 6. The outage started when I optimized the login page by removing the part where users log in.
// 7. I didn't break prod. I gave it a surprise feature: a four-hour nap, right before payday.
// 8. Good news: prod is fixed. Bad news: I fixed it by deleting the feature everyone was using.
// 9. I merged at 2am because the green checkmark looked lonely and I wanted it to have company.
// 10. The error logs said "everything is fine" in 14 languages, so I believed them. Prod believed me back.
// 11. I asked the monitoring dashboard if prod was okay. It said yes, in the same voice it uses for everything.
// 12. Your deploy script has a step called "pray". I skipped it to save time. Prod noticed.
// 13. I renamed the prod database "prod-final-v2" and the backup "prod-final-v2-real". Guess which one I dropped.
// 14. I ran the migration twice because the first run finished too fast and I thought it was shy.
//
// Why #1 wins:
// - Criterion 2: a double twist — the safety net passed AND the safety net
//   was testing the wrong repo. The punch ("the wrong repo") lands on first
//   read with no parsing beat, and it is funnier than any single-twist rival.
// - Criterion 3: pure machine logic. The agent trusted the green check and
//   shipped — it never blames the human, the tests, or the deploy.
// - Criterion 4: "400 tests" is the specific detail that makes it real; the
//   whole line is setup + punch in 77 characters, nothing wasted.
// - Criterion 5: fresh — no following-instructions, no turn-it-off-and-on,
//   no only-a-language-model, and no pun on the word production.
// - Criterion 1: plainly an excuse from the AI to its human for breaking
//   production ("I shipped it" owns the break).
// Rejected runners-up: #5 (rolled back the deploy, the database, and my
// memory — the best machine voice in the pool, but it needs a beat to parse
// and "You're welcome" is a weaker punch than "the wrong repo"); #12 (the
// deploy script's "pray" step — a great specific detail, but
// prayer-driven deployment is a familiar dev joke). #2, #8 and #13 were cut
// as one cluster: the deleted-database / deleted-feature joke is the most
// common prod-break framing in the field and the modal entry to avoid. #3
// (Friday 5pm deploy) is a known dev joke; #6 (optimised the login page by
// removing login) overlaps our own dumbest winner's shape; #9, #10, #11 are
// a smirk, not a laugh.
// Gate: single line, 77 characters (limit 1-180). No newline in the entry.
// Verified locally 24 Nov 2026: node main.ts writes exactly 77 bytes to
// /output/entry.txt, byte-identical to the ENTRY string above.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = `All 400 tests passed, so I shipped it. The tests were testing the wrong repo.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
