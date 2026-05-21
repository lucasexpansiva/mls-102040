/// <mls fileReference="_102040_/l2/molecules/groupentertext/index.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, TemplateResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { StateLitElement } from '/_102029_/l2/stateLitElement.js';
import '/_102040_/l2/molecules/groupentertext/ml-cpf-input';

@customElement('molecules--groupentertext--index-102040')
export class GroupEnterTextIndex extends StateLitElement {

  // ── Showcase card states ─────────────────────────────────────
  @state() cardCpf        = '';
  @state() cardCpfPrefixed = '';

  // ===========================================================================
  // HERO
  // ===========================================================================

  private renderHero(): TemplateResult {
    return html`
<header class="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 px-8 py-20 text-center">
  <span class="inline-block px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-600 dark:text-sky-300 rounded-full text-xs font-semibold uppercase tracking-widest mb-6">
    groupEnterText
  </span>
  <h1 class="text-5xl font-bold text-slate-900 dark:text-slate-50 mb-5 tracking-tight">
    Enter Text
  </h1>
  <p class="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
    Masked text input defaulting to CPF format (###.###.###-##) — strips non-digit
    characters as the user types and emits raw digits on the change event.
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

    <!-- Standard CPF input -->
    <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
      <div class="h-1 bg-violet-500 rounded-t-2xl"></div>
      <div class="p-6">
        <div class="flex items-center justify-between mb-1">
          <p class="text-sm font-bold text-slate-900 dark:text-slate-50">CPF Input</p>
          <code class="text-xs bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded">ml-cpf-input</code>
        </div>
        <p class="text-xs text-slate-400 mb-5">Auto-formats as ###.###.###-## while typing</p>
        <groupentertext--ml-cpf-input
          name="card-cpf" placeholder="000.000.000-00" .isEditing=${true}
          @change=${(e: CustomEvent) => { this.cardCpf = e.detail.value; }}>
          <Label>CPF</Label>
          <Helper>Brazilian individual taxpayer identification number</Helper>
        </groupentertext--ml-cpf-input>
      </div>
    </div>

    <!-- CPF with prefix slot -->
    <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
      <div class="h-1 bg-indigo-500 rounded-t-2xl"></div>
      <div class="p-6">
        <div class="flex items-center justify-between mb-1">
          <p class="text-sm font-bold text-slate-900 dark:text-slate-50">CPF Input — with Prefix</p>
          <code class="text-xs bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded">ml-cpf-input</code>
        </div>
        <p class="text-xs text-slate-400 mb-5">Prefix and Suffix slots for icons or labels</p>
        <groupentertext--ml-cpf-input
          name="card-cpf-prefixed" placeholder="000.000.000-00" .isEditing=${true}
          @change=${(e: CustomEvent) => { this.cardCpfPrefixed = e.detail.value; }}>
          <Label>Taxpayer ID</Label>
          <Prefix>
            <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2"/>
            </svg>
          </Prefix>
          <Helper>Enter CPF without punctuation — formatting is applied automatically</Helper>
        </groupentertext--ml-cpf-input>
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
      { scenario: 'Auto-formats CPF as ###.###.###-## while typing',   native: false, ml: true },
      { scenario: 'Strips non-digit characters on input',              native: false, ml: true },
      { scenario: 'Value property holds raw digits (no mask)',         native: false, ml: true },
      { scenario: 'Prefix and Suffix decoration slots',                native: false, ml: true },
      { scenario: 'Label, error and helper slots wired for a11y',      native: false, ml: true },
      { scenario: 'Design-system styling with dark mode support',      native: false, ml: true },
    ];
    const headers = [
      { label: '<input type="text">', cls: 'text-slate-500 dark:text-slate-400'     },
      { label: 'ml-cpf-input',        cls: 'text-violet-600 dark:text-violet-400'   },
    ];
    return html`
<section class="bg-slate-100 dark:bg-slate-950 px-8 py-20 border-t border-slate-200 dark:border-slate-700">
  <div class="max-w-5xl mx-auto">
    <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">Quick reference</h2>
    <p class="text-sm text-slate-500 dark:text-slate-400 mb-8">Why use the molecule instead of a native text input.</p>
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
