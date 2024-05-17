/**
 * @license
 * Copyright (c) La Vía Óntica SC, Ontica LLC and contributors. All rights reserved.
 *
 * See LICENSE.txt in the project root for complete license information.
 */

import { ROUTES } from './routes-config';

import { View } from '../common-models/common';


export const BudgetViews: View[] = [
  {
    name: 'Budget.Applications',
    title: 'Solicitudes',
    menuTitle: 'Solicitudes',
    url: ROUTES.presupuesto_solicitudes.fullpath,
    permission: ROUTES.presupuesto_solicitudes.permission,
  },
  {
    name: 'Budget.Control',
    title: 'Control',
    menuTitle: 'Control',
    url: ROUTES.presupuesto_control.fullpath,
    permission: ROUTES.presupuesto_control.permission,
  },
  {
    name: 'Budget.Income',
    title: 'Ingresos',
    menuTitle: 'Ingresos',
    url: ROUTES.presupuesto_ingresos.fullpath,
    permission: ROUTES.presupuesto_ingresos.permission,
  },
  {
    name: 'Budget.Outcome',
    title: 'Egresos',
    menuTitle: 'Egresos',
    url: ROUTES.presupuesto_egresos.fullpath,
    permission: ROUTES.presupuesto_egresos.permission,
  },
  {
    name: 'Budget.Planning',
    title: 'Planeación',
    url: ROUTES.presupuesto_planeacion.fullpath,
    permission: ROUTES.presupuesto_planeacion.permission,
  },
  {
    name: 'Budget.Reporting',
    title: 'Reportes',
    menuTitle: 'Reportes',
    url: ROUTES.presupuesto_reportes.fullpath,
    permission: ROUTES.presupuesto_reportes.permission,
  }
];


export const PaymentsViews: View[] = [
  {
    name: 'Payments.Applications',
    title: 'Solicitudes',
    menuTitle: 'Solicitudes',
    url: ROUTES.pagos_solicitudes.fullpath,
    permission: ROUTES.pagos_solicitudes.permission,
  },
  {
    name: 'Payments.Committed',
    title: 'Comprometidos',
    url: ROUTES.pagos_comprometidos.fullpath,
    permission: ROUTES.pagos_comprometidos.permission,
  },
  {
    name: 'Payments.Programmed',
    title: 'Programados',
    menuTitle: 'Programados',
    url: ROUTES.pagos_programados.fullpath,
    permission: ROUTES.pagos_programados.permission,
  },
  {
    name: 'Payments.Applied',
    title: 'Realizados',
    menuTitle: 'Realizados',
    url: ROUTES.pagos_realizados.fullpath,
    permission: ROUTES.pagos_realizados.permission,
  },
  {
    name: 'Payments.Contracts',
    title: 'Contratos',
    menuTitle: 'Contratos',
    url: ROUTES.pagos_contratos.fullpath,
    permission: ROUTES.pagos_contratos.permission,
  },
  {
    name: 'Payments.Reporting',
    title: 'Reportes',
    menuTitle: 'Reportes',
    url: ROUTES.pagos_reportes.fullpath,
    permission: ROUTES.pagos_reportes.permission,
  },
];


export const CashFlowViews: View[] = [
  {
    name: 'CashFlow.Coding',
    title: 'Codificación',
    url: ROUTES.flujo_de_efectivo_codificacion.fullpath,
    permission: ROUTES.flujo_de_efectivo_codificacion.permission,
  },
  {
    name: 'CashFlow.Rules',
    title: 'Reglas',
    menuTitle: 'Reglas',
    url: ROUTES.flujo_de_efectivo_reglas.fullpath,
    permission: ROUTES.flujo_de_efectivo_reglas.permission,
  },
  {
    name: 'CashFlow.Reports',
    title: 'Reportes',
    menuTitle: 'Reportes',
    url: ROUTES.flujo_de_efectivo_reportes.fullpath,
    permission: ROUTES.flujo_de_efectivo_reportes.permission,
  },
];


export const CataloguesAndRulesViews: View[] = [
  {
    name: 'CataloguesAndRules.BudgetConcepts',
    title: 'Conceptos presupuestales',
    url: ROUTES.reglas_y_catalogos_conceptos_presupuestales.fullpath,
    permission: ROUTES.reglas_y_catalogos_conceptos_presupuestales.permission,
  },
  {
    name: 'CataloguesAndRules.AccountingRules',
    title: 'Reglas contabilizadoras',
    url: ROUTES.reglas_y_catalogos_reglas_contabilizadoras.fullpath,
    permission: ROUTES.reglas_y_catalogos_reglas_contabilizadoras.permission,
  },
  {
    name: 'CataloguesAndRules.ExternalVariables',
    title: 'Valores externos',
    url: ROUTES.reglas_y_catalogos_valores_externos.fullpath,
    permission: ROUTES.reglas_y_catalogos_valores_externos.permission,
  },
  {
    name: 'CataloguesAndRules.Suppliers',
    title: 'Proveedores',
    url: ROUTES.reglas_y_catalogos_proveedores.fullpath,
    permission: ROUTES.reglas_y_catalogos_proveedores.permission,
  },
];


export const SystemManagementViews: View[] = [
  {
    name: 'SystemManagementViews.ControlPanel',
    title: 'Panel de control',
    url: ROUTES.administracion_panel_de_control.fullpath,
    permission: ROUTES.administracion_panel_de_control.permission,
  },
  {
    name: 'SystemManagementViews.AccessControl',
    title: 'Control de accesos',
    url: ROUTES.administracion_control_de_accesos.fullpath,
    permission: ROUTES.administracion_control_de_accesos.permission,
  },
];


export const UnauthorizedViews: View[] = [
  {
    name: 'Unauthorized',
    title: '',
    url: ROUTES.unauthorized.fullpath,
  },
];
