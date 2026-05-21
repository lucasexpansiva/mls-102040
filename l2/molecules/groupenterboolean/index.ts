/// <mls fileReference="_102040_/l2/molecules/groupenterboolean/index.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, TemplateResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { StateLitElement } from '/_102029_/l2/stateLitElement.js';
import '/_102040_/l2/molecules/groupenterboolean/ml-checkbox-preference';
import '/_102040_/l2/molecules/groupenterboolean/ml-toggle-switch';

@customElement('molecules--groupenterboolean--index-102040')
export class GroupEnterBooleanIndex extends StateLitElement {

  // ── Showcase card states ─────────────────────────────────────
  @state() cardCheckbox = false;
  @state() cardToggle   = true;

  // ===========================================================================
  // HERO
  // ===========================================================================

  private renderHero(): TemplateResult {
    return html`
<header class="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 px-8 py-20 text-center">
  <span class="inline-block px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-600 dark:text-sky-300 rounded-full text-xs font-semibold uppercase tracking-widest mb-6">
    groupEnterBoolean
  </span>
  <h1 class="text-5xl font-bold text-slate-900 dark:text-slate-50 mb-5 tracking-tight">
    Enter Boolean
  </h1>
  <p class="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
    Two components for capturing a true / false decision — the checkbox for forms and lists
    of independent options, the toggle for settings with an immediate on/off visual effect.
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

    <!-- Checkbox Preference -->
    <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
      <div class="h-1 bg-sky-500 rounded-t-2xl"></div>
      <div class="p-6">
        <div class="flex items-center justify-between mb-1">
          <p class="text-sm font-bold text-slate-900 dark:text-slate-50">Checkbox Preference</p>
          <code class="text-xs bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded">ml-checkbox-preference</code>
        </div>
        <p class="text-xs text-slate-400 mb-5">Yes / no field in forms and option lists</p>
        <groupenterboolean--ml-checkbox-preference
          name="card-checkbox" .value=${this.cardCheckbox} .isEditing=${true}
          @change=${(e: CustomEvent) => { this.cardCheckbox = e.detail.value; }}>
          <Label>Enable email notifications</Label>
          <Helper>Receive updates about your account activity</Helper>
        </groupenterboolean--ml-checkbox-preference>
      </div>
    </div>

    <!-- Toggle Switch -->
    <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
      <div class="h-1 bg-emerald-500 rounded-t-2xl"></div>
      <div class="p-6">
        <div class="flex items-center justify-between mb-1">
          <p class="text-sm font-bold text-slate-900 dark:text-slate-50">Toggle Switch</p>
          <code class="text-xs bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded">ml-toggle-switch</code>
        </div>
        <p class="text-xs text-slate-400 mb-5">On/off setting with immediate visual feedback</p>
        <groupenterboolean--ml-toggle-switch
          name="card-toggle" .value=${this.cardToggle} .isEditing=${true}
          @change=${(e: CustomEvent) => { this.cardToggle = e.detail.value; }}>
          <Label>Dark mode</Label>
          <Helper>Switch between light and dark interface themes</Helper>
        </groupenterboolean--ml-toggle-switch>
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
      checkbox: boolean; toggle: boolean;
    }> = [
      { scenario: 'On/off setting with immediate visual feedback',          checkbox: false, toggle: true  },
      { scenario: 'Yes / no question inside a traditional form',           checkbox: true,  toggle: false },
      { scenario: 'List of independent boolean options',                   checkbox: true,  toggle: false },
      { scenario: 'App-level settings (dark mode, auto-save)',             checkbox: false, toggle: true  },
      { scenario: 'Accept terms & conditions before submitting',           checkbox: true,  toggle: false },
      { scenario: 'Feature flag or preference in a settings panel',       checkbox: false, toggle: true  },
      { scenario: 'Inline option alongside descriptive text',             checkbox: true,  toggle: false },
    ];
    const headers = [
      { label: 'Checkbox', cls: 'text-sky-600 dark:text-sky-400'         },
      { label: 'Toggle',   cls: 'text-emerald-600 dark:text-emerald-400' },
    ];
    return html`
<section class="bg-slate-100 dark:bg-slate-950 px-8 py-20 border-t border-slate-200 dark:border-slate-700">
  <div class="max-w-5xl mx-auto">
    <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">Quick reference</h2>
    <p class="text-sm text-slate-500 dark:text-slate-400 mb-8">Both capture a boolean — the context determines which one to use.</p>
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
              ${([row.checkbox, row.toggle] as boolean[]).map(ok => html`
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
