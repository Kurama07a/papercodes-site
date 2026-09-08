const stages = [
  {
    title: "Input",
    items: ["Form", "Message", "Call", "API", "Manual task"],
  },
  {
    title: "Enrich",
    items: ["Clean", "Validate", "Contextualize"],
  },
  {
    title: "Automate",
    items: ["Route", "Trigger", "Update", "Notify"],
  },
  {
    title: "Intelligence",
    items: ["Score", "Assign", "Respond", "Learn"],
  },
];

export function HeroWorkflow() {
  return (
    <div className="hero-engine" aria-label="A four-stage customer workflow">
      <p className="engine-note">
        {"// Behind every experience"}
        <br />
        {"// is a system"}
      </p>
      <ol className="workflow">
        {stages.map((stage, index) => (
          <li className="workflow__stage" key={stage.title}>
            <div className="workflow__heading">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{stage.title}</h2>
            </div>
            <ul>
              {stage.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
      <p className="engine-outcome">Less manual work.<br />More meaningful work.</p>
      <p className="engine-annotation">From fragmented<br />to freedom.</p>
    </div>
  );
}
