/// <mls fileReference="_102040_/l2/molecules/groupselectone/index.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, TemplateResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { StateLitElement } from '/_102029_/l2/stateLitElement.js';
import '/_102040_/l2/molecules/groupselectone/ml-radio-group';
import '/_102040_/l2/molecules/groupselectone/ml-segmented-control';

interface Config {
  value: string;
  isEditing: boolean;
  required: boolean;
  disabled: boolean;
  readonly: boolean;
  loading: boolean;
  error: string;
}

const defaultConfig = (): Config => ({
  value: '', isEditing: true, required: false,
  disabled: false, readonly: false, loading: false, error: '',
});

@customElement('groupselectone--index')
export class GroupSelectOneIndex extends StateLitElement {

  @state() radioBasic: Config = defaultConfig();
  @state() radioGrouped: Config = defaultConfig();
  @state() segmentedBasic: Config = defaultConfig();
  @state() segmentedGrouped: Config = defaultConfig();

  // ===========================================================================
  // CONFIG PANEL HELPERS
  // ===========================================================================

  private toggle(cfg: Config, key: keyof Omit<Config, 'value' | 'error'>): Config {
    return { ...cfg, [key]: !cfg[key] };
  }

  private renderToggle(label: string, active: boolean, onClick: () => void): TemplateResult {
    return html`
<button
  class="${active
    ? 'bg-sky-500 text-white border-sky-500'
    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700'
  } border rounded-lg px-3 py-1.5 text-sm font-medium transition-colors cursor-pointer w-full text-left"
  @click=${onClick}
>${label}</button>`;
  }

  private renderConfig(cfg: Config, update: (next: Config) => void): TemplateResult {
    return html`
<div class="flex flex-col gap-4">
  <div>
    <p class="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">Props</p>
    <div class="flex flex-col gap-2">
      ${this.renderToggle('is-editing', cfg.isEditing, () => update(this.toggle(cfg, 'isEditing')))}
      ${this.renderToggle('required',   cfg.required,   () => update(this.toggle(cfg, 'required')))}
      ${this.renderToggle('disabled',   cfg.disabled,   () => update(this.toggle(cfg, 'disabled')))}
      ${this.renderToggle('readonly',   cfg.readonly,   () => update(this.toggle(cfg, 'readonly')))}
      ${this.renderToggle('loading',    cfg.loading,    () => update(this.toggle(cfg, 'loading')))}
    </div>
  </div>
  <div>
    <p class="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">error</p>
    <input
      type="text"
      placeholder="Error message..."
      .value=${cfg.error}
      @input=${(e: InputEvent) => update({ ...cfg, error: (e.target as HTMLInputElement).value })}
      class="w-full border border-slate-300 dark:border-slate-600 rounded-lg px-3 py-1.5 text-sm bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
    />
  </div>
  ${cfg.value ? html`
  <div class="pt-2 border-t border-slate-100 dark:border-slate-700">
    <p class="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">value</p>
    <p class="text-sm font-medium text-slate-800 dark:text-slate-100">${cfg.value}</p>
  </div>` : html``}
</div>`;
  }

  private renderExampleRow(
    label: string,
    cfg: Config,
    update: (next: Config) => void,
    component: TemplateResult
  ): TemplateResult {
    return html`
<div class="mb-4">
  <p class="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">${label}</p>
  <div class="grid grid-cols-[200px_1fr] gap-6 items-start">
    <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5">
      ${this.renderConfig(cfg, update)}
    </div>
    <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
      ${component}
    </div>
  </div>
</div>`;
  }

  // ===========================================================================
  // RENDER
  // ===========================================================================

  render() {
    return html`
<div class="bg-slate-50 dark:bg-slate-900 min-h-screen font-sans">

  <!-- Group header -->
  <header class="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 px-8 py-10 mb-10">
    <div class="max-w-3xl">
      <span class="inline-block px-2.5 py-1 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 rounded-md text-xs font-semibold uppercase tracking-wide mb-3">
        groupSelectOne
      </span>
      <h1 class="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-3">Select One</h1>
      <p class="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
        Allows the user to select exactly one option from a list of mutually exclusive choices.
        Ideal for scenarios where a single, clear decision is required.
        Implementations include dropdown, radio group, segmented control, knob, and list picker.
      </p>
    </div>
  </header>

  <div class="px-8 pb-16">

    <!-- ml-radio-group -->
    <section class="mb-16">
      <div class="mb-6">
        <div class="flex items-center gap-3 mb-2">
          <h2 class="text-xl font-bold text-slate-800 dark:text-slate-100">Radio Group</h2>
          <code class="text-xs bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-2 py-1 rounded">groupselectone--ml-radio-group</code>
        </div>
        <p class="text-sm text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
          A single-selection option group that displays all available choices at once without hiding them
          behind a dropdown. It allows the user to pick exactly one option from a small set, making every
          option visible for quick comparison and selection.
        </p>
      </div>

      ${this.renderExampleRow('Basic', this.radioBasic, (next) => { this.radioBasic = next; }, html`
        <groupselectone--ml-radio-group
          value="${this.radioBasic.value}"
          name="size"
          error="${this.radioBasic.error}"
          .isEditing=${this.radioBasic.isEditing}
          .required=${this.radioBasic.required}
          .disabled=${this.radioBasic.disabled}
          .readonly=${this.radioBasic.readonly}
          .loading=${this.radioBasic.loading}
          @change=${(e: CustomEvent) => { this.radioBasic = { ...this.radioBasic, value: e.detail.value }; }}
        >
          <Label>Plan size</Label>
          <Helper>Choose the plan that best fits your usage.</Helper>
          <Item value="small">Small</Item>
          <Item value="medium">Medium</Item>
          <Item value="large">Large</Item>
        </groupselectone--ml-radio-group>
      `)}

      ${this.renderExampleRow('With groups', this.radioGrouped, (next) => { this.radioGrouped = next; }, html`
        <groupselectone--ml-radio-group
          value="${this.radioGrouped.value}"
          name="department"
          error="${this.radioGrouped.error}"
          .isEditing=${this.radioGrouped.isEditing}
          .required=${this.radioGrouped.required}
          .disabled=${this.radioGrouped.disabled}
          .readonly=${this.radioGrouped.readonly}
          .loading=${this.radioGrouped.loading}
          @change=${(e: CustomEvent) => { this.radioGrouped = { ...this.radioGrouped, value: e.detail.value }; }}
        >
          <Label>Department</Label>
          <Helper>Select the department the employee will be assigned to.</Helper>
          <Group label="Technology">
            <Item value="engineering">Software Engineering</Item>
            <Item value="data">Data & Analytics</Item>
            <Item value="infra">Infrastructure</Item>
          </Group>
          <Group label="Business">
            <Item value="product">Product</Item>
            <Item value="marketing">Marketing</Item>
            <Item value="sales">Sales</Item>
          </Group>
          <Group label="Corporate">
            <Item value="finance">Finance</Item>
            <Item value="legal">Legal</Item>
            <Item value="hr" disabled>Human Resources (no openings)</Item>
          </Group>
        </groupselectone--ml-radio-group>
      `)}
    </section>

    <!-- ml-segmented-control -->
    <section class="mb-16">
      <div class="mb-6">
        <div class="flex items-center gap-3 mb-2">
          <h2 class="text-xl font-bold text-slate-800 dark:text-slate-100">Segmented Control</h2>
          <code class="text-xs bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-2 py-1 rounded">groupselectone--ml-segmented-control</code>
        </div>
        <p class="text-sm text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
          A single-selection control that presents multiple options as a connected horizontal group of segments.
          It allows choosing one option from a compact set, showing the selected label when inactive and
          displaying all options together when active for editing.
        </p>
      </div>

      ${this.renderExampleRow('Basic', this.segmentedBasic, (next) => { this.segmentedBasic = next; }, html`
        <groupselectone--ml-segmented-control
          value="${this.segmentedBasic.value}"
          name="billingCycle"
          error="${this.segmentedBasic.error}"
          .isEditing=${this.segmentedBasic.isEditing}
          .required=${this.segmentedBasic.required}
          .disabled=${this.segmentedBasic.disabled}
          .readonly=${this.segmentedBasic.readonly}
          .loading=${this.segmentedBasic.loading}
          @change=${(e: CustomEvent) => { this.segmentedBasic = { ...this.segmentedBasic, value: e.detail.value }; }}
        >
          <Label>Billing cycle</Label>
          <Helper>Select how often you'd like to be billed.</Helper>
          <Item value="monthly">Monthly</Item>
          <Item value="quarterly">Quarterly</Item>
          <Item value="yearly">Yearly</Item>
        </groupselectone--ml-segmented-control>
      `)}

      ${this.renderExampleRow('With disabled item', this.segmentedGrouped, (next) => { this.segmentedGrouped = next; }, html`
        <groupselectone--ml-segmented-control
          value="${this.segmentedGrouped.value}"
          name="environment"
          error="${this.segmentedGrouped.error}"
          .isEditing=${this.segmentedGrouped.isEditing}
          .required=${this.segmentedGrouped.required}
          .disabled=${this.segmentedGrouped.disabled}
          .readonly=${this.segmentedGrouped.readonly}
          .loading=${this.segmentedGrouped.loading}
          @change=${(e: CustomEvent) => { this.segmentedGrouped = { ...this.segmentedGrouped, value: e.detail.value }; }}
        >
          <Label>Deployment environment</Label>
          <Helper>Choose the target environment for this release.</Helper>
          <Item value="dev">Development</Item>
          <Item value="staging">Staging</Item>
          <Item value="prod" disabled>Production (restricted)</Item>
        </groupselectone--ml-segmented-control>
      `)}
    </section>

  </div>
</div>`;
  }
}
