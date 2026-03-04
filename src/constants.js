export const CLI_COMMAND = 'cpc';
export const CONFIG_FILENAME = '.cpc.json';

export const DEFAULT_CONFIG = {
  featuresDir: '../dev-worktrees',
  mainBranch: 'main',
  agent: 'claude',
  copyConfig: {
    claude: true,
    codex: true,
    opencode: true
  },
  terminal: 'auto'
};

export const TERMINAL_OPTIONS = ['auto', 'wt', 'windows-terminal', 'cmd', 'tabby', 'powershell'];
