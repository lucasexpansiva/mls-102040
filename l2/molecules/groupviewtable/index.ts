/// <mls fileReference="_102040_/l2/molecules/groupviewtable/index.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, TemplateResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { StateLitElement } from '/_102029_/l2/stateLitElement.js';
import '/_102040_/l2/molecules/groupviewtable/ml-data-table-minimal';
import '/_102040_/l2/molecules/groupviewtable/ml-view-table';

interface Employee { name: string; department: string; role: string; status: string; }

const EMPLOYEES: Employee[] = [
  { name: 'Alice Martins',     department: 'Engineering', role: 'Senior Developer',   status: 'Active'   },
  { name: 'Bruno Costa',       department: 'Product',     role: 'Product Manager',    status: 'Active'   },
  { name: 'Carla Souza',       department: 'Design',      role: 'UX Designer',        status: 'On leave' },
  { name: 'Diego Lima',        department: 'Analytics',   role: 'Data Scientist',     status: 'Active'   },
  { name: 'Elena Rocha',       department: 'Marketing',   role: 'Growth Analyst',     status: 'Active'   },
  { name: 'Felipe Torres',     department: 'Engineering', role: 'DevOps Engineer',    status: 'Active'   },
  { name: 'Gabriela Ferreira', department: 'Finance',     role: 'Financial Analyst',  status: 'Active'   },
  { name: 'Henrique Alves',    department: 'Sales',       role: 'Account Executive',  status: 'Active'   },
  { name: 'Isabela Nunes',     department: 'Legal',       role: 'Legal Counsel',      status: 'Active'   },
  { name: 'João Pereira',      department: 'Engineering', role: 'Frontend Developer', status: 'On leave' },
];

@customElement('molecules--groupviewtable--index-102040')
export class GroupViewTableIndex extends StateLitElement {

  @state() minimalPage = 1;

  // ===========================================================================
  // HERO
  // ===========================================================================

  private renderHero(): TemplateResult {
    return html`
<header class="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 px-8 py-20 text-center">
  <span class="inline-block px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-600 dark:text-sky-300 rounded-full text-xs font-semibold uppercase tracking-widest mb-6">
    groupViewTable
  </span>
  <h1 class="text-5xl font-bold text-slate-900 dark:text-slate-50 mb-5 tracking-tight">
    View Table
  </h1>
  <p class="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
    Two table components sharing the same slot contract — choose based on where pagination lives.
    Both support row selection, column sorting, and dark mode out of the box.
  </p>
</header>`;
  }

  // ===========================================================================
  // SHOWCASE CARDS
  // ===========================================================================

  private renderShowcaseCards(): TemplateResult {
    const pageSize = 5;
    const pageRows = EMPLOYEES.slice((this.minimalPage - 1) * pageSize, this.minimalPage * pageSize);

    return html`
<section class="bg-slate-50 dark:bg-slate-950 px-8 py-12 border-b border-slate-200 dark:border-slate-700">
  <div class="max-w-2xl mx-auto flex flex-col gap-5">

    <!-- Data Table Minimal -->
    <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
      <div class="h-1 bg-sky-500"></div>
      <div class="p-6">
        <div class="flex items-center justify-between mb-1">
          <p class="text-sm font-bold text-slate-900 dark:text-slate-50">Data Table Minimal</p>
          <code class="text-xs bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded">ml-data-table-minimal</code>
        </div>
        <p class="text-xs text-slate-400 mb-5">External pagination — you control the page</p>
        <groupviewtable--ml-data-table-minimal
          .selectable=${false}
          .loading=${false}
          .page=${this.minimalPage}
          .pageSize=${pageSize}
          .totalItems=${EMPLOYEES.length}
          value="" error=""
          @page-change=${(e: CustomEvent) => { this.minimalPage = e.detail.page; }}
        >
          <TableHeader>
            <TableRow>
              <TableHead key="name" sortable>Name</TableHead>
              <TableHead key="department" sortable>Department</TableHead>
              <TableHead key="role">Role</TableHead>
              <TableHead key="status" sortable>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            ${pageRows.map(e => html`
            <TableRow>
              <TableCell>${e.name}</TableCell>
              <TableCell>${e.department}</TableCell>
              <TableCell>${e.role}</TableCell>
              <TableCell>${e.status}</TableCell>
            </TableRow>`)}
          </TableBody>
        </groupviewtable--ml-data-table-minimal>
      </div>
    </div>

    <!-- View Table -->
    <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
      <div class="h-1 bg-emerald-500"></div>
      <div class="p-6">
        <div class="flex items-center justify-between mb-1">
          <p class="text-sm font-bold text-slate-900 dark:text-slate-50">View Table</p>
          <code class="text-xs bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded">ml-view-table</code>
        </div>
        <p class="text-xs text-slate-400 mb-5">Internal pagination — the component handles it</p>
        <groupviewtable--ml-view-table
          .selectable=${false}
          .loading=${false}
          .pageSize=${5}
          value="" error=""
        >
          <TableHeader>
            <TableRow>
              <TableHead key="name" sortable>Name</TableHead>
              <TableHead key="department" sortable>Department</TableHead>
              <TableHead key="role">Role</TableHead>
              <TableHead key="status" sortable>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            ${EMPLOYEES.map(e => html`
            <TableRow>
              <TableCell>${e.name}</TableCell>
              <TableCell>${e.department}</TableCell>
              <TableCell>${e.role}</TableCell>
              <TableCell>${e.status}</TableCell>
            </TableRow>`)}
          </TableBody>
        </groupviewtable--ml-view-table>
      </div>
    </div>

  </div>
</section>`;
  }

  // ===========================================================================
  // REFERENCE TABLE
  // ===========================================================================

  private renderReferenceTable(): TemplateResult {
    const rows: Array<{
      scenario: string;
      minimal: boolean; view: boolean;
    }> = [
      { scenario: 'Pagination managed externally (server-side)',  minimal: true,  view: false },
      { scenario: 'Pagination managed internally (client-side)', minimal: false, view: true  },
      { scenario: 'Large dataset fetched in pages from an API',  minimal: true,  view: false },
      { scenario: 'Fixed local dataset passed all at once',      minimal: false, view: true  },
      { scenario: 'Row selection with checkboxes',               minimal: true,  view: true  },
      { scenario: 'Column sorting',                              minimal: true,  view: true  },
      { scenario: 'Loading and empty states',                    minimal: true,  view: true  },
    ];
    const headers = [
      { label: 'Data Table Minimal', cls: 'text-sky-600 dark:text-sky-400'         },
      { label: 'View Table',         cls: 'text-emerald-600 dark:text-emerald-400' },
    ];
    return html`
<section class="bg-slate-100 dark:bg-slate-950 px-8 py-20 border-t border-slate-200 dark:border-slate-700">
  <div class="max-w-5xl mx-auto">
    <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">Quick reference</h2>
    <p class="text-sm text-slate-500 dark:text-slate-400 mb-8">Choose the table component based on where pagination lives.</p>
    <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
      <table class="w-full text-sm">
        <thead>
          <tr class="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
            <th class="text-left px-5 py-3.5 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide w-1/2">
              Scenario
            </th>
            ${headers.map(h => html`
              <th class="px-4 py-3.5 text-xs font-semibold uppercase tracking-wide ${h.cls}">${h.label}</th>
            `)}
          </tr>
        </thead>
        <tbody>
          ${rows.map((row, i) => html`
            <tr class="${i % 2 !== 0 ? 'bg-slate-50/60 dark:bg-slate-900/40' : ''} border-b border-slate-100 dark:border-slate-700/60 last:border-0">
              <td class="px-5 py-3.5 text-slate-700 dark:text-slate-300">${row.scenario}</td>
              ${([row.minimal, row.view] as boolean[]).map(ok => html`
                <td class="px-4 py-3.5 text-center">
                  ${ok
                    ? html`<span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 text-xs font-bold">✓</span>`
                    : html`<span class="text-slate-200 dark:text-slate-700 text-sm">—</span>`}
                </td>
              `)}
            </tr>
          `)}
        </tbody>
      </table>
    </div>
  </div>
</section>`;
  }

  // ===========================================================================
  // RENDER
  // ===========================================================================

  render() {
    return html`
<div class="font-sans min-h-screen">
  ${this.renderHero()}
  ${this.renderShowcaseCards()}
  ${this.renderReferenceTable()}
</div>`;
  }
}
