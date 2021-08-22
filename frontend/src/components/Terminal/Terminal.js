import React from 'react';
import Terminal from 'react-bash';
import './TerminalUI.css';

// export const ps = {
//     exec: ({ structure, cwd, history }, args) => {
//       // var processes = `PID TTY TIME CMD 1684 pts/0 00:00:00 bash 1692 pts/0 00:00:00 ps`;
//       var processes = `1684 pts/0 00:00:00 bash`;
//       return { structure, cwd, history: history.concat({ value: processes }) };
//     },
//   };

const TerminalUI = () => {
  const structure = {
    system: {
      Desktop: {},
      Documents: {
        basics: {
          content: 'Learning Linux commands',
        },
      },
      Downloads: {},
      Music: {},
      Pictures: {},
      Public: {},
      Templates: {},
      Videos: {},
    },
    '.hiddenDir': {},
    '.hiddenFile': {},
  };
  const history = [
    {
      value:
        "Try out your favourite linux commands. Type 'help' to look at all the commands available.",
    },
  ];
  //   const extensions = { ps };
  return (
    <div id="termMain">
      <div id="terminal">
        <Terminal
          prefix="user@system"
          structure={structure}
          history={history}
          // extensions={extensions}
        />
      </div>
    </div>
  );
};

export default TerminalUI;
