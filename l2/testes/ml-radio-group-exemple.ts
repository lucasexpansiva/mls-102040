/// <mls fileReference="_102040_/l2/testes/ml-radio-group-exemple.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, TemplateResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { StateLitElement } from '/_102029_/l2/stateLitElement.js';
import '/_102040_/l2/molecules/groupselectone/ml-radio-group';

@customElement('testes--ml-radio-group-exemple')
export class MlRadioGroupExemple extends StateLitElement {

  @state() value: string = '';
  @state() isEditing: boolean = true;
  @state() required: boolean = false;
  @state() disabled: boolean = false;
  @state() readonly: boolean = false;
  @state() loading: boolean = false;
  @state() error: string = '';

  private renderToggle(label: string, active: boolean, onClick: () => void): TemplateResult {
    return html`
<button
  class="${active
    ? 'bg-sky-500 text-white border-sky-500'
    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700'
  } border rounded-lg px-4 py-2 text-sm font-medium transition-colors cursor-pointer"
  @click=${onClick}
>
  ${label}
</button>`;
  }

  render() {
    return html`
<div class="bg-slate-50 dark:bg-slate-900 min-h-screen p-8 font-sans">

  <header class="mb-8">
    <h1 class="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-1">Cadastro de Funcionário</h1>
    <p class="text-sm text-slate-500 dark:text-slate-400">
      Exemplo de uso do componente <code class="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-xs">groupselectone--ml-radio-group</code>
    </p>
  </header>

  <!-- Config panel -->
  <section class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 mb-6">
    <h2 class="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-4">Configurações</h2>

    <div class="flex flex-wrap gap-3 mb-5">
      ${this.renderToggle('is-editing', this.isEditing, () => { this.isEditing = !this.isEditing; })}
      ${this.renderToggle('required', this.required, () => { this.required = !this.required; })}
      ${this.renderToggle('disabled', this.disabled, () => { this.disabled = !this.disabled; })}
      ${this.renderToggle('readonly', this.readonly, () => { this.readonly = !this.readonly; })}
      ${this.renderToggle('loading', this.loading, () => { this.loading = !this.loading; })}
    </div>

    <div class="flex items-center gap-3">
      <label class="text-sm font-medium text-slate-600 dark:text-slate-300 whitespace-nowrap">error:</label>
      <input
        type="text"
        placeholder="Digite uma mensagem de erro..."
        .value=${this.error}
        @input=${(e: InputEvent) => { this.error = (e.target as HTMLInputElement).value; }}
        class="flex-1 max-w-sm border border-slate-300 dark:border-slate-600 rounded-lg px-3 py-1.5 text-sm bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
      />
    </div>
  </section>

  <!-- Component -->
  <section class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
    <groupselectone--ml-radio-group
      value="${this.value}"
      name="department"
      error="${this.error}"
      .isEditing=${this.isEditing}
      .required=${this.required}
      .disabled=${this.disabled}
      .readonly=${this.readonly}
      .loading=${this.loading}
      @change=${(e: CustomEvent) => { this.value = e.detail.value; }}
    >
      <Label>Departamento</Label>
      <Helper>Selecione o departamento onde o funcionário será alocado.</Helper>
      <Group label="Tecnologia">
        <Item value="engineering">Engenharia de Software</Item>
        <Item value="data">Dados e Analytics</Item>
        <Item value="infra">Infraestrutura</Item>
      </Group>
      <Group label="Negócios">
        <Item value="product">Produto</Item>
        <Item value="marketing">Marketing</Item>
        <Item value="sales">Vendas</Item>
      </Group>
      <Group label="Corporativo">
        <Item value="finance">Financeiro</Item>
        <Item value="legal">Jurídico</Item>
        <Item value="hr" disabled>Recursos Humanos (sem vagas)</Item>
      </Group>
    </groupselectone--ml-radio-group>

    ${this.value ? html`
    <p class="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700 text-sm text-slate-500 dark:text-slate-400">
      Departamento selecionado: <strong class="text-slate-900 dark:text-slate-100">${this.value}</strong>
    </p>` : html``}
  </section>

</div>`;
  }
}
