/**
 * @license
 * Copyright (c) La Vía Óntica SC, Ontica LLC and contributors. All rights reserved.
 *
 * See LICENSE.txt in the project root for complete license information.
 */

import { PERMISSIONS } from "./permissions-config";


export const ROUTES = {

  // #region app-routing module

  presupuesto: {
    permission: PERMISSIONS.ALL,
    parent: '',
    path: 'presupuesto',
    fullpath: '/presupuesto',
  },

  pagos: {
    permission: PERMISSIONS.ALL,
    parent: '',
    path: 'pagos-a-proveedores',
    fullpath: '/pagos-a-proveedores',
  },

  reportes: {
    permission: PERMISSIONS.ALL,
    parent: '',
    path: 'reportes',
    fullpath: '/reportes',
  },

  reglas_y_catalogos: {
    permission: PERMISSIONS.ALL,
    parent: '',
    path: 'reglas-y-catalogos',
    fullpath: '/reglas-y-catalogos',
  },

  administracion: {
    permission: PERMISSIONS.ALL,
    parent: '',
    path: 'administracion',
    fullpath: '/administracion',
  },

  security: {
    parent: '',
    path: 'seguridad',
    fullpath: '/seguridad',
  },

  unauthorized: {
    parent: '',
    path: 'no-autorizado',
    fullpath: '/no-autorizado',
  },

  // #endregion

  // #region budget-routing module

  presupuesto_planeacion: {
    permission: PERMISSIONS.ALL,
    parent: 'presupuesto',
    path: 'planeacion',
    fullpath: '/presupuesto/planeacion',
  },

  presupuesto_control: {
    permission: PERMISSIONS.ALL,
    parent: 'presupuesto',
    path: 'control',
    fullpath: '/presupuesto/control',
  },

  presupuesto_ingresos: {
    permission: PERMISSIONS.ALL,
    parent: 'presupuesto',
    path: 'ingresos',
    fullpath: '/presupuesto/ingresos',
  },

  presupuesto_egresos: {
    permission: PERMISSIONS.ALL,
    parent: 'presupuesto',
    path: 'egresos',
    fullpath: '/presupuesto/egresos',
  },

  presupuesto_solicitudes: {
    permission: PERMISSIONS.ALL,
    parent: 'presupuesto',
    path: 'solicitudes',
    fullpath: '/presupuesto/solicitudes',
  },

  // #endregion

  // #region payments-routing module

  pagos_comprometidos: {
    permission: PERMISSIONS.ALL,
    parent: 'pagos-a-proveedores',
    path: 'comprometidos',
    fullpath: '/pagos-a-proveedores/comprometidos',
  },

  pagos_programados: {
    permission: PERMISSIONS.ALL,
    parent: 'pagos-a-proveedores',
    path: 'programados',
    fullpath: '/pagos-a-proveedores/programados',
  },

  pagos_realizados: {
    permission: PERMISSIONS.ALL,
    parent: 'pagos-a-proveedores',
    path: 'realizados',
    fullpath: '/pagos-a-proveedores/realizados',
  },

  pagos_contratos: {
    permission: PERMISSIONS.ALL,
    parent: 'pagos-a-proveedores',
    path: 'contratos',
    fullpath: '/pagos-a-proveedores/contratos',
  },

  // #endregion

  // #region reporting-routing module

  reportes_financieros: {
    permission: PERMISSIONS.ALL,
    parent: 'reportes',
    path: 'financieros',
    fullpath: '/reportes/financieros',
  },

  reportes_regulatorios: {
    permission: PERMISSIONS.ALL,
    parent: 'reportes',
    path: 'regulatorios',
    fullpath: '/reportes/regulatorios',
  },

  reportes_operativos: {
    permission: PERMISSIONS.ALL,
    parent: 'reportes',
    path: 'operativos',
    fullpath: '/reportes/operativos',
  },

  //#endregion

  // #region catalogues-and-rules-routing module

  reglas_y_catalogos_conceptos_presupuestales: {
    permission: PERMISSIONS.ALL,
    parent: 'reglas-y-catalogos',
    path: 'conceptos-presupuestales',
    fullpath: '/reglas-y-catalogos/conceptos-presupuestales',
  },

  reglas_y_catalogos_reglas_contabilizadoras: {
    permission: PERMISSIONS.ALL,
    parent: 'reglas-y-catalogos',
    path: 'reglas-contabilizadoras',
    fullpath: '/reglas-y-catalogos/reglas-contabilizadoras',
  },

  reglas_y_catalogos_valores_externos: {
    permission: PERMISSIONS.ALL,
    parent: 'reglas-y-catalogos',
    path: 'valores-externos',
    fullpath: '/reglas-y-catalogos/valores-externos',
  },

  reglas_y_catalogos_proveedores: {
    permission: PERMISSIONS.ALL,
    parent: 'reglas-y-catalogos',
    path: 'proveedores',
    fullpath: '/reglas-y-catalogos/proveedores',
  },

  // #endregion

  // #region system-management-routing module

  administracion_panel_de_control: {
    permission: PERMISSIONS.ALL,
    parent: 'administracion',
    path: 'panel-de-control',
    fullpath: '/administracion/panel-de-control',
  },

  administracion_control_de_accesos: {
    permission: PERMISSIONS.ALL,
    parent: 'administracion',
    path: 'control-de-accesos',
    fullpath: '/administracion/control-de-accesos',
  },

  // #endregion

  // #region security-routing module

  security_login: {
    parent: 'seguridad',
    path: 'login',
    fullpath: '/seguridad/login'
  },

  // #endregion

};


export const DEFAULT_ROUTE = ROUTES.administracion_panel_de_control;


export const DEFAULT_PATH = DEFAULT_ROUTE.fullpath;


export const LOGIN_PATH = ROUTES.security_login.fullpath;


export const UNAUTHORIZED_PATH = ROUTES.unauthorized.path;


export const ROUTES_LIST = Object.keys(ROUTES)
                                 .map(key => ROUTES[key])
                                 .filter(x => x.parent && x.permission);
