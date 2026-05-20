/// <mls fileReference="_102040_/l2/molecules/groupviewchart/index.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { StateLitElement } from '/_102029_/l2/stateLitElement.js';
import '/_102040_/l2/molecules/groupviewchart/ml-area-chart';
import '/_102040_/l2/molecules/groupviewchart/ml-line-chart';

@customElement('molecules--groupviewchart--index-102040')
export class GroupViewChartIndex extends StateLitElement {

  // ===========================================================================
  // HERO
  // ===========================================================================

  private renderHero(): TemplateResult {
    return html`
<header class="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 px-8 py-20 text-center">
  <span class="inline-block px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-600 dark:text-sky-300 rounded-full text-xs font-semibold uppercase tracking-widest mb-6">
    groupViewChart
  </span>
  <h1 class="text-5xl font-bold text-slate-900 dark:text-slate-50 mb-5 tracking-tight">
    View Chart
  </h1>
  <p class="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
    Two chart types sharing the same data contract — swap the tag to change the visualization.
    Both support multi-series, legends, value labels, loading states, and dark mode.
  </p>
</header>`;
  }

  // ===========================================================================
  // SHOWCASE CARDS
  // ===========================================================================

  private renderShowcaseCards(): TemplateResult {
    return html`
<section class="bg-slate-50 dark:bg-slate-950 px-8 py-12 border-b border-slate-200 dark:border-slate-700">
  <div class="max-w-2xl mx-auto flex flex-col gap-5">

    <!-- Area Chart -->
    <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
      <div class="h-1 bg-sky-500"></div>
      <div class="p-6">
        <div class="flex items-center justify-between mb-1">
          <p class="text-sm font-bold text-slate-900 dark:text-slate-50">Area Chart</p>
          <code class="text-xs bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded">ml-area-chart</code>
        </div>
        <p class="text-xs text-slate-400 mb-5">Volume, cumulative totals, and part-to-whole</p>
        <groupviewchart--ml-area-chart .showLegend=${true} .showValues=${false} .loading=${false}>
          <Label>Monthly Revenue by Product Line</Label>
          <Series name="SaaS" color="#0ea5e9">
            <Point label="Jan" value="42000" />
            <Point label="Feb" value="51000" />
            <Point label="Mar" value="58000" />
            <Point label="Apr" value="63000" />
            <Point label="May" value="71000" />
            <Point label="Jun" value="79000" />
          </Series>
          <Series name="Consulting" color="#8b5cf6">
            <Point label="Jan" value="28000" />
            <Point label="Feb" value="31000" />
            <Point label="Mar" value="27000" />
            <Point label="Apr" value="35000" />
            <Point label="May" value="38000" />
            <Point label="Jun" value="44000" />
          </Series>
          <Series name="Licensing" color="#10b981">
            <Point label="Jan" value="15000" />
            <Point label="Feb" value="17000" />
            <Point label="Mar" value="19000" />
            <Point label="Apr" value="21000" />
            <Point label="May" value="24000" />
            <Point label="Jun" value="28000" />
          </Series>
        </groupviewchart--ml-area-chart>
      </div>
    </div>

    <!-- Line Chart -->
    <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
      <div class="h-1 bg-emerald-500"></div>
      <div class="p-6">
        <div class="flex items-center justify-between mb-1">
          <p class="text-sm font-bold text-slate-900 dark:text-slate-50">Line Chart</p>
          <code class="text-xs bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded">ml-line-chart</code>
        </div>
        <p class="text-xs text-slate-400 mb-5">Trends, progressions, and individual value precision</p>
        <groupviewchart--ml-line-chart .showLegend=${true} .showValues=${false} .loading=${false}>
          <Label>Weekly Website Traffic by Channel</Label>
          <Series name="Organic" color="#10b981">
            <Point label="Week 1" value="12400" />
            <Point label="Week 2" value="13800" />
            <Point label="Week 3" value="15200" />
            <Point label="Week 4" value="14600" />
            <Point label="Week 5" value="16900" />
            <Point label="Week 6" value="18300" />
          </Series>
          <Series name="Paid" color="#f59e0b">
            <Point label="Week 1" value="8200" />
            <Point label="Week 2" value="9500" />
            <Point label="Week 3" value="8800" />
            <Point label="Week 4" value="11200" />
            <Point label="Week 5" value="10600" />
            <Point label="Week 6" value="12400" />
          </Series>
          <Series name="Direct" color="#0ea5e9">
            <Point label="Week 1" value="5100" />
            <Point label="Week 2" value="5400" />
            <Point label="Week 3" value="5800" />
            <Point label="Week 4" value="6200" />
            <Point label="Week 5" value="6700" />
            <Point label="Week 6" value="7300" />
          </Series>
        </groupviewchart--ml-line-chart>
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
      area: boolean; line: boolean;
    }> = [
      { scenario: 'Highlight volume below trend lines',            area: true,  line: false },
      { scenario: 'Track and compare trends over time',            area: true,  line: true  },
      { scenario: 'Show part-to-whole composition across series',  area: true,  line: false },
      { scenario: 'Emphasize connections between data points',     area: false, line: true  },
      { scenario: 'Multi-series comparison',                       area: true,  line: true  },
      { scenario: 'Visualize cumulative growth',                   area: true,  line: false },
      { scenario: 'Make individual data values easy to read',      area: false, line: true  },
    ];
    const headers = [
      { label: 'Area Chart', cls: 'text-sky-600 dark:text-sky-400'         },
      { label: 'Line Chart', cls: 'text-emerald-600 dark:text-emerald-400' },
    ];
    return html`
<section class="bg-slate-100 dark:bg-slate-950 px-8 py-20 border-t border-slate-200 dark:border-slate-700">
  <div class="max-w-5xl mx-auto">
    <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">Quick reference</h2>
    <p class="text-sm text-slate-500 dark:text-slate-400 mb-8">Match your visualization need to the right chart type.</p>
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
              ${([row.area, row.line] as boolean[]).map(ok => html`
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
