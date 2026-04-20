import { FiCommand, FiList, FiSettings } from "react-icons/fi";
import SectionHeading from "@/components/section-heading";
import { commandGroups } from "@/data/site";

const groupIcons = [FiCommand, FiList, FiSettings];

export const metadata = {
  title: "Commands",
};

export default function CommandsPage() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Command Deck"
          title="Run playback like a live set"
          description="Simple slash commands let listeners request songs while DJs keep full control over pacing, flow, and stage settings."
        />

        <div className="command-grid">
          {commandGroups.map((group, index) => {
            const Icon = groupIcons[index];

            return (
              <article key={group.title} className="glass-card command-card">
                <div className="card-head">
                  <div className="icon-chip">{Icon ? <Icon /> : null}</div>
                  <h3>{group.title}</h3>
                </div>
                <div className="chip-row">
                  {group.commands.map((command) => (
                    <span key={command} className="command-chip">
                      {command}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
