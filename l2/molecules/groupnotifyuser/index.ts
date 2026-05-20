/// <mls fileReference="_102040_/l2/molecules/groupnotifyuser/index.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, TemplateResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { StateLitElement } from '/_102029_/l2/stateLitElement.js';
import '/_102040_/l2/molecules/groupnotifyuser/ml-toast-notification';

type ToastType = 'info' | 'success' | 'warning' | 'error';

const TOAST_VARIANTS: Array<{
  type: ToastType;
  label: string;
  bar: string;
  labelCls: string;
  subtitle: string;
  title: string;
  message: string;
}> = [
  {
    type: 'info',
    label: 'Info',
    bar: 'bg-sky-500',
    labelCls: 'text-sky-600 dark:text-sky-400',
    subtitle: 'System updates and neutral information',
    title: 'New update available',
    message: 'Version 2.4.0 is ready to install. Refresh the page to apply.',
  },
  {
    type: 'success',
    label: 'Success',
    bar: 'bg-emerald-500',
    labelCls: 'text-emerald-600 dark:text-emerald-400',
    subtitle: 'Confirms a completed action',
    title: 'Changes saved',
    message: 'Your profile has been updated successfully.',
  },
  {
    type: 'warning',
    label: 'Warning',
    bar: 'bg-amber-500',
    labelCls: 'text-amber-600 dark:text-amber-400',
    subtitle: 'Recoverable issue requiring attention',
    title: 'Storage almost full',
    message: 'You are using 92% of your storage quota.',
  },
  {
    type: 'error',
    label: 'Error',
    bar: 'bg-red-500',
    labelCls: 'text-red-600 dark:text-red-400',
    subtitle: 'Critical failure requiring action',
    title: 'Payment failed',
    message: 'We could not process your payment. Check your card details.',
  },
];

@customElement('molecules--groupnotifyuser--index-102040')
export class GroupNotifyUserIndex extends StateLitElement {

  @state() visibleInfo    = false;
  @state() visibleSuccess = false;
  @state() visibleWarning = false;
  @state() visibleError   = false;

  private show(type: ToastType) {
    this.visibleInfo    = false;
    this.visibleSuccess = false;
    this.visibleWarning = false;
    this.visibleError   = false;
    requestAnimationFrame(() => {
      if (type === 'info')    this.visibleInfo    = true;
      if (type === 'success') this.visibleSuccess = true;
      if (type === 'warning') this.visibleWarning = true;
      if (type === 'error')   this.visibleError   = true;
    });
  }

  private getVisible(type: ToastType): boolean {
    if (type === 'info')    return this.visibleInfo;
    if (type === 'success') return this.visibleSuccess;
    if (type === 'warning') return this.visibleWarning;
    return this.visibleError;
  }

  private setVisible(type: ToastType, val: boolean) {
    if (type === 'info')    this.visibleInfo    = val;
    if (type === 'success') this.visibleSuccess = val;
    if (type === 'warning') this.visibleWarning = val;
    if (type === 'error')   this.visibleError   = val;
  }

  // ===========================================================================
  // HERO
  // ===========================================================================

  private renderHero(): TemplateResult {
    return html`
<header class="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 px-8 py-20 text-center">
  <span class="inline-block px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-600 dark:text-sky-300 rounded-full text-xs font-semibold uppercase tracking-widest mb-6">
    groupNotifyUser
  </span>
  <h1 class="text-5xl font-bold text-slate-900 dark:text-slate-50 mb-5 tracking-tight">
    Notify User
  </h1>
  <p class="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
    Ephemeral notifications that slide into a screen corner, communicate outcomes clearly,
    and disappear — without interrupting the user's workflow.
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

    ${TOAST_VARIANTS.map(v => html`
    <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
      <div class="h-1 ${v.bar}"></div>
      <div class="p-6">
        <div class="flex items-center justify-between mb-1">
          <p class="text-sm font-bold text-slate-900 dark:text-slate-50">${v.label}</p>
          <code class="text-xs bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded">ml-toast-notification type="${v.type}"</code>
        </div>
        <p class="text-xs text-slate-400 mb-5">${v.subtitle}</p>
        <button
          class="px-4 py-2 rounded-lg text-sm font-semibold bg-slate-100 dark:bg-slate-700 ${v.labelCls} hover:opacity-80 transition-opacity cursor-pointer"
          @click=${() => this.show(v.type)}
        >Show ${v.label} toast →</button>
      </div>
    </div>
    `)}

  </div>
</section>

${TOAST_VARIANTS.map(v => html`
  <groupnotifyuser--ml-toast-notification
    type="${v.type}"
    position="bottom-right"
    duration="3000"
    .visible=${this.getVisible(v.type)}
    .dismissible=${true}
    @dismiss=${() => this.setVisible(v.type, false)}
  >
    <Title>${v.title}</Title>
    <Message>${v.message}</Message>
  </groupnotifyuser--ml-toast-notification>
`)}`;
  }

  // ===========================================================================
  // REFERENCE TABLE
  // ===========================================================================

  private renderReferenceTable(): TemplateResult {
    const rows: Array<{
      scenario: string;
      info: boolean; success: boolean; warning: boolean; error: boolean;
    }> = [
      { scenario: 'System update or informational message',       info: true,  success: false, warning: false, error: false },
      { scenario: 'Action completed successfully',                info: false, success: true,  warning: false, error: false },
      { scenario: 'File saved, form submitted, data synced',      info: false, success: true,  warning: false, error: false },
      { scenario: 'User is approaching a quota or limit',         info: false, success: false, warning: true,  error: false },
      { scenario: 'Recoverable issue, user action needed',        info: false, success: false, warning: true,  error: false },
      { scenario: 'Network or system error',                      info: false, success: false, warning: false, error: true  },
      { scenario: 'Payment failed or destructive action blocked', info: false, success: false, warning: false, error: true  },
    ];
    const headers = [
      { label: 'Info',    cls: 'text-sky-600 dark:text-sky-400'         },
      { label: 'Success', cls: 'text-emerald-600 dark:text-emerald-400' },
      { label: 'Warning', cls: 'text-amber-600 dark:text-amber-400'     },
      { label: 'Error',   cls: 'text-red-600 dark:text-red-400'         },
    ];
    return html`
<section class="bg-slate-100 dark:bg-slate-950 px-8 py-20 border-t border-slate-200 dark:border-slate-700">
  <div class="max-w-5xl mx-auto">
    <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">Quick reference</h2>
    <p class="text-sm text-slate-500 dark:text-slate-400 mb-8">Match your feedback scenario to the right toast type.</p>
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
              ${([row.info, row.success, row.warning, row.error] as boolean[]).map(ok => html`
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
