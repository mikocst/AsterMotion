import Badge from '@components/Library/Badge';
import { changelog, type ChangelogEntry } from 'src/lib/changelog';

const tagColors: Record<NonNullable<ChangelogEntry['tag']>, 'blue' | 'green' | 'yellow' | 'mono'> = {
  release: 'blue',
  feature: 'green',
  design: 'yellow',
  fix: 'mono',
};

const formatDate = (date: string) => {
  const [year, month, day] = date.split('-');
  return `${month}.${day}.${year.slice(2)}`;
};

const ChangelogPage = () => {
  const entries = [...changelog].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <div className="flex flex-col w-full max-w-3xl gap-8 px-4 py-10 mx-auto sm:px-8">
      <div>
        <h1 className="text-3xl font-semibold text-primary">Change Log</h1>
        <p className="max-w-[65ch] mt-2 text-gray-500">
          Updates and milestones for the AsterMotion component library.
        </p>
      </div>

      <ol className="relative flex flex-col gap-8 pl-6 border-l border-gray-200">
        {entries.map((entry) => (
          <li key={`${entry.date}-${entry.title}`} className="relative">
            <span className="absolute w-2.5 h-2.5 -translate-x-[calc(1.5rem+5px)] rounded-full bg-primary top-1.5" />
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-gray-400">{formatDate(entry.date)}</span>
              {entry.tag && (
                <Badge color={tagColors[entry.tag]} variant="pill">
                  {entry.tag}
                </Badge>
              )}
            </div>
            <p className="mt-1 font-medium text-gray-900">{entry.title}</p>
            {entry.description && <p className="mt-1 text-sm text-gray-500">{entry.description}</p>}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ChangelogPage;
