export interface RefTableRow {
  name: string;
  type?: string;
  defaultValue?: string;
  description: string;
}

export function RefTable({ rows }: { rows: RefTableRow[] }) {
  return (
    <div className="docs-table-scroll" role="region" aria-label="Reference table" tabIndex={0}>
      <table>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Type</th>
            <th scope="col">Default</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name}>
              <td><code>{row.name}</code></td>
              <td>{row.type ?? "—"}</td>
              <td>{row.defaultValue ?? "—"}</td>
              <td>{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
