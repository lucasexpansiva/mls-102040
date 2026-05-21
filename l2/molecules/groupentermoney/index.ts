/// <mls fileReference="_102040_/l2/molecules/groupentermoney/index.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, TemplateResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { StateLitElement } from '/_102029_/l2/stateLitElement.js';
import '/_102040_/l2/molecules/groupentermoney/ml-enter-money-br';

@customElement('molecules--groupentermoney--index-102040')
export class GroupEnterMoneyIndex extends StateLitElement {

  // ── Showcase card states ─────────────────────────────────────
  @state() cardMoney: number | null = null;
  @state() cardMoneyBounded: number | null = null;

  // ===========================================================================
  // HERO
  // ===========================================================================

  private renderHero(): TemplateResult {
    return html`
<header class="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 px-8 py-20 text-center">
  <span class="inline-block px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-600 dark:text-sky-300 rounded-full text-xs font-semibold uppercase tracking-widest mb-6">
    groupEnterMoney
  </span>
  <h1 class="text-5xl font-bold text-slate-900 dark:text-slate-50 mb-5 tracking-tight">
    Enter Money
  </h1>
  <p class="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
    Monetary input with Brazilian Real formatting — auto-applies commas and decimal
    separators as the user types, and enforces min / max limits on blur.
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

    <!-- Standard BRL input -->
    <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
      <div class="h-1 bg-emerald-500 rounded-t-2xl"></div>
      <div class="p-6">
        <div class="flex items-center justify-between mb-1">
          <p class="text-sm font-bold text-slate-900 dark:text-slate-50">Enter Money BR</p>
          <code class="text-xs bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded">ml-enter-money-br</code>
        </div>
        <p class="text-xs text-slate-400 mb-5">Standard pt-BR monetary input</p>
        <groupentermoney--ml-enter-money-br
          name="card-money" locale="pt-BR" .isEditing=${true}
          @change=${(e: CustomEvent) => { this.cardMoney = e.detail.value; }}>
          <Label>Transaction amount</Label>
          <Helper>Enter the value in Brazilian Reais</Helper>
        </groupentermoney--ml-enter-money-br>
      </div>
    </div>

    <!-- Bounded amount -->
    <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
      <div class="h-1 bg-teal-500 rounded-t-2xl"></div>
      <div class="p-6">
        <div class="flex items-center justify-between mb-1">
          <p class="text-sm font-bold text-slate-900 dark:text-slate-50">Enter Money BR — bounded</p>
          <code class="text-xs bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded">ml-enter-money-br</code>
        </div>
        <p class="text-xs text-slate-400 mb-5">With min / max constraints enforced on blur</p>
        <groupentermoney--ml-enter-money-br
          name="card-money-bounded" locale="pt-BR" min="0" max="10000" .isEditing=${true}
          @change=${(e: CustomEvent) => { this.cardMoneyBounded = e.detail.value; }}>
          <Label>Payment amount</Label>
          <Helper>Allowed range: R$ 0,00 – R$ 10.000,00</Helper>
        </groupentermoney--ml-enter-money-br>
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
      native: boolean; ml: boolean;
    }> = [
      { scenario: 'pt-BR monetary format (e.g. 1.234,56)',             native: false, ml: true },
      { scenario: 'Auto-applies decimal separator as digits are typed', native: false, ml: true },
      { scenario: 'Strips non-digit characters on input',              native: false, ml: true },
      { scenario: 'Min / max enforcement on blur',                     native: false, ml: true },
      { scenario: 'Label, error and helper slots wired for a11y',      native: false, ml: true },
      { scenario: 'Design-system styling with dark mode support',      native: false, ml: true },
    ];
    const headers = [
      { label: '<input type="number">',  cls: 'text-slate-500 dark:text-slate-400'     },
      { label: 'ml-enter-money-br',      cls: 'text-emerald-600 dark:text-emerald-400' },
    ];
    return html`
<section class="bg-slate-100 dark:bg-slate-950 px-8 py-20 border-t border-slate-200 dark:border-slate-700">
  <div class="max-w-5xl mx-auto">
    <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">Quick reference</h2>
    <p class="text-sm text-slate-500 dark:text-slate-400 mb-8">Why use the molecule instead of a native number input.</p>
    <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
      <table class="w-full text-sm">
        <thead>
          <tr class="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
            <th class="text-left px-5 py-3.5 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide w-3/4">
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
              ${([row.native, row.ml] as boolean[]).map(ok => html`
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
