import { jsPDF } from "jspdf"
import { profile, experience, projects, publications, education, skills } from "./portfolio-data"

// Emerald accent + dark ink, mirrors the site theme.
const ACCENT: [number, number, number] = [16, 128, 80]
const INK: [number, number, number] = [24, 32, 28]
const MUTED: [number, number, number] = [110, 120, 114]

export function generateResume() {
  const doc = new jsPDF({ unit: "pt", format: "a4" })
  const pageW = doc.internal.pageSize.getWidth()
  const pageH = doc.internal.pageSize.getHeight()
  const marginX = 48
  const contentW = pageW - marginX * 2
  let y = 0

  const ensureSpace = (needed: number) => {
    if (y + needed > pageH - 48) {
      doc.addPage()
      y = 56
    }
  }

  const sectionTitle = (label: string) => {
    ensureSpace(40)
    y += 18
    doc.setFont("helvetica", "bold")
    doc.setFontSize(11)
    doc.setTextColor(...ACCENT)
    doc.text(label.toUpperCase(), marginX, y)
    doc.setDrawColor(...ACCENT)
    doc.setLineWidth(1.2)
    doc.line(marginX, y + 6, marginX + contentW, y + 6)
    y += 20
  }

  // ---- Header band ----
  doc.setFillColor(...ACCENT)
  doc.rect(0, 0, pageW, 96, "F")
  doc.setTextColor(255, 255, 255)
  doc.setFont("helvetica", "bold")
  doc.setFontSize(26)
  doc.text(profile.name, marginX, 50)
  doc.setFont("helvetica", "normal")
  doc.setFontSize(13)
  doc.text(profile.role, marginX, 72)
  doc.setFontSize(9.5)
  const contact = [profile.email, profile.location, profile.socials.github].join("   |   ")
  doc.text(contact, marginX, 88)
  y = 128

  // ---- Summary ----
  doc.setTextColor(...INK)
  doc.setFont("helvetica", "normal")
  doc.setFontSize(10.5)
  const summary = doc.splitTextToSize(profile.tagline, contentW)
  doc.text(summary, marginX, y)
  y += summary.length * 14

  // ---- Experience ----
  sectionTitle("Experience")
  experience.forEach((job) => {
    ensureSpace(70)
    doc.setFont("helvetica", "bold")
    doc.setFontSize(11.5)
    doc.setTextColor(...INK)
    doc.text(job.role, marginX, y)
    doc.setFont("helvetica", "normal")
    doc.setFontSize(9.5)
    doc.setTextColor(...MUTED)
    doc.text(job.period, marginX + contentW, y, { align: "right" })
    y += 14
    doc.setTextColor(...ACCENT)
    doc.setFont("helvetica", "bold")
    doc.setFontSize(10)
    doc.text(`${job.company}  ·  ${job.location}`, marginX, y)
    y += 15
    doc.setFont("helvetica", "normal")
    doc.setTextColor(...INK)
    doc.setFontSize(10)
    job.points.forEach((p) => {
      const line = `${p.text}${p.highlight ?? ""}`.replace(/\s+/g, " ").trim()
      const wrapped = doc.splitTextToSize(`•  ${line}`, contentW - 8)
      ensureSpace(wrapped.length * 13 + 4)
      doc.text(wrapped, marginX + 4, y)
      y += wrapped.length * 13
    })
    y += 4
    doc.setTextColor(...MUTED)
    doc.setFontSize(9)
    const stack = doc.splitTextToSize(`Stack: ${job.stack.join(", ")}`, contentW)
    ensureSpace(stack.length * 12)
    doc.text(stack, marginX, y)
    y += stack.length * 12 + 6
  })

  // ---- Projects ----
  sectionTitle("Selected Projects")
  projects.forEach((proj) => {
    ensureSpace(50)
    doc.setFont("helvetica", "bold")
    doc.setFontSize(11)
    doc.setTextColor(...INK)
    doc.text(`${proj.name}  —  ${proj.tag}`, marginX, y)
    y += 13
    doc.setFont("helvetica", "normal")
    doc.setFontSize(9.5)
    doc.setTextColor(...INK)
    const desc = doc.splitTextToSize(proj.description, contentW)
    doc.text(desc, marginX, y)
    y += desc.length * 12
    proj.points.forEach((pt) => {
      const wrapped = doc.splitTextToSize(`•  ${pt}`, contentW - 8)
      ensureSpace(wrapped.length * 12 + 2)
      doc.text(wrapped, marginX + 4, y)
      y += wrapped.length * 12
    })
    doc.setTextColor(...MUTED)
    doc.setFontSize(9)
    doc.text(proj.stack.join(", "), marginX, y + 2)
    y += 16
  })

  // ---- Publications ----
  sectionTitle("Publications")
  publications.forEach((pub) => {
    ensureSpace(40)
    doc.setFont("helvetica", "bold")
    doc.setFontSize(10)
    doc.setTextColor(...INK)
    const title = doc.splitTextToSize(pub.title, contentW)
    doc.text(title, marginX, y)
    y += title.length * 12
    doc.setFont("helvetica", "italic")
    doc.setFontSize(9)
    doc.setTextColor(...MUTED)
    doc.text(`${pub.venue}, ${pub.year}`, marginX, y)
    y += 16
  })

  // ---- Education ----
  sectionTitle("Education")
  education.forEach((edu) => {
    ensureSpace(36)
    doc.setFont("helvetica", "bold")
    doc.setFontSize(10.5)
    doc.setTextColor(...INK)
    doc.text(edu.school, marginX, y)
    doc.setFont("helvetica", "normal")
    doc.setFontSize(9.5)
    doc.setTextColor(...MUTED)
    doc.text(edu.period, marginX + contentW, y, { align: "right" })
    y += 13
    doc.setTextColor(...INK)
    doc.text(`${edu.degree} — ${edu.detail}`, marginX, y)
    y += 18
  })

  // ---- Skills ----
  sectionTitle("Technical Skills")
  doc.setFontSize(10)
  skills.forEach((group) => {
    ensureSpace(20)
    doc.setFont("helvetica", "bold")
    doc.setTextColor(...ACCENT)
    doc.text(`${group.category}: `, marginX, y)
    const labelW = doc.getTextWidth(`${group.category}: `)
    doc.setFont("helvetica", "normal")
    doc.setTextColor(...INK)
    const items = doc.splitTextToSize(group.items.join(", "), contentW - labelW)
    doc.text(items, marginX + labelW, y)
    y += Math.max(items.length * 12, 14) + 2
  })

  doc.save(`${profile.name.replace(/\s+/g, "_")}_Resume.pdf`)
}
