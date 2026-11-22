// Beendet laufende Dev-Server (3000) und Vorschau-Server (4173).
// Aufruf: npm run stop  (oder per Klick in VS Code: "⏹ Server stoppen")
import { execSync } from 'node:child_process'

const ports = [3000, 4173]
const isWindows = process.platform === 'win32'

function pidsOnPort(port) {
  try {
    if (isWindows) {
      // Sprachunabhängig (netstat zeigt auf deutschem Windows "ABHÖREN" statt "LISTENING")
      const out = execSync(
        `powershell -NoProfile -Command "Get-NetTCPConnection -LocalPort ${port} -State Listen -ErrorAction SilentlyContinue | Select-Object -ExpandProperty OwningProcess"`,
        { encoding: 'utf8' },
      )
      return [...new Set(out.split(/\r?\n/).map((s) => s.trim()).filter((pid) => pid && pid !== '0'))]
    }
    return execSync(`lsof -ti tcp:${port} -sTCP:LISTEN`, { encoding: 'utf8' }).split('\n').filter(Boolean)
  } catch {
    return []
  }
}

let stopped = 0
for (const port of ports) {
  for (const pid of pidsOnPort(port)) {
    try {
      execSync(isWindows ? `taskkill /PID ${pid} /T /F` : `kill ${pid}`, { stdio: 'ignore' })
      console.log(`✔ Server auf Port ${port} beendet (PID ${pid})`)
      stopped++
    } catch {
      console.log(`✖ Konnte PID ${pid} auf Port ${port} nicht beenden`)
    }
  }
}

if (stopped === 0) console.log('Kein laufender Server gefunden.')
