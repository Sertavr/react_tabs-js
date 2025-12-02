export const Tabs = ({ currentTab, tabs, onTabSelected }) => {
  return (
    <ul>
      {tabs.map(tab => (
        <li
          className={currentTab === tab.title.at(-1) ? 'is-active' : ''}
          data-cy="Tab"
          key={tab.id}
        >
          <a
            onClick={() => {
              if (currentTab === tab.title.at(-1)) {
                return;
              }

              onTabSelected(`${tab.title.at(-1)}`);
            }}
            href={`#${tab.id}`}
            data-cy="TabLink"
          >
            {tab.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
