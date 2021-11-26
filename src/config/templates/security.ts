import type { Config } from './types';

export const securityLabels = [
  'Team:SIEM',
  'Team:SecuritySolution',
  'Team: SecuritySolution',
  'Team:Endpoint Response',
  'Team:Threat Hunting',
  'Team:Threat HuntingCases',
  'Team:Threat Hunting:Investigations',
  'Team:Detections and Resp',
  'Team:Asset Management',
  'Team:Onboarding and Lifecycle Mgt',
  'Team:Security Solution Platform',
  'Feature:Timeline',
  'Feature:Detection Rules',
  'Feature:Detection Alerts',
  'Team: CTI',
  'Team:CTI',
];

export const securityTemplate: Config = {
  includedLabels: securityLabels,
  excludedLabels: ['backport', 'release_note:skip'],
  areas: [
    {
      title: 'Elastic Security',
      labels: securityLabels,
    },
  ],
  templates: {
    pages: {
      releaseNotes: `[discrete]
[[release-notes-{{version}}]]
== {{version}}
{{#prs.breaking}}

[discrete]
[[breaking-changes-{{version}}]]
==== Breaking changes
{{{prs.breaking}}}
{{/prs.breaking}}
{{#prs.deprecations}}

[discrete]
[[deprecations-{{version}}]]
==== Deprecations
{{{prs.deprecations}}}
{{/prs.deprecations}}
{{#prs.features}}

[discrete]
[[features-{{version}}]]
==== Features
{{{prs.features}}}
{{/prs.features}}
{{#prs.enhancementsAndFixes}}

[discrete]
[[bug-fixes-{{version}}]]
==== Bug fixes and enhancements
{{{prs.enhancementsAndFixes}}}
{{/prs.enhancementsAndFixes}}
`,
    },
    prGroup: '{{{prs}}}',
    prs: {
      breaking: `*{{{title}}}*\n\n!!TODO!!\n\nSee ({pull}{{number}}[#{{number}}]) for details.\n`,
      deprecation: `*{{{title}}}*\n\n!!TODO!!\n\nSee ({pull}{{number}}[#{{number}}]) for details.\n`,
      _other_:
        '* {{{title}}} {kibana-pull}{{number}}[#{{number}}]{{#details}}\n////\n!!TODO!! The above PR had a lengthy release note description:\n{{{details}}}\n////{{/details}}',
    },
  },
};
