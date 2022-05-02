const COUNTRY_LIST = [
  { name: 'United States of America', code: 'us' },
  { name: 'United Kingdoms', code: 'gb' },
  { name: 'India', code: 'in' }
];

const GENERO_LIST = [
  { name: 'Hombre', code: 'h' },
  { name: 'Mujer', code: 'm' }
]

const TIPODOCUMENTO_LIST = [
  { name: 'Registro civil de nacimiento', code: '11' },
  { name: 'Tarjeta de identidad', code: '12' },
  { name: 'Cédula de ciudadanía', code: '13' },
  { name: 'Tarjeta de extranjería', code: '21' },
  { name: 'Cédula de extranjería', code: '22' },
  { name: 'NIT', code: '31' },
  { name: 'Pasaporte', code: '41' },
  { name: 'Tipo de documento extranjero', code: '42' },
]

const DATA_STEP_1 = {
    selecionaPaises: {
    type: 'select',
    options: COUNTRY_LIST,
    validations: {},
    errors: {},
    placeholder: 'Seleciona país'
  },
  genero: {
    type:'select',
    options: GENERO_LIST,
    validations: {},
    errors: {},
    placeholder: 'Seleciona genero'
  },
  primerNombre: { type: 'text', validations: {}, errors: {}, placeholder: 'Ingrese primer nombre' },
  primerSegundo: { type: 'text', validations: {}, errors: {}, placeholder: 'Ingrese segundo nombre' },
  fechaDeNacimiento: {
    type: 'date',
    validations: {},
    errors: {},
    placeholder: 'Fecha de nacimiento'
  },
  tipoDocumento: {
    type:'select',
    options: TIPODOCUMENTO_LIST,
    validations: {},
    errors: {},
    placeholder: 'Seleciona tipo documento'
  },
  numeroDocumento: {
    type: 'number',
    validations: {},
    errors: {
      pattern: 'Ingresa numero'
    },
    placeholder: 'Ingresa numero de documento'
  },
  fotoDocumentoFrente : { type: 'file', validations: {}, errors: {}, placeholder: 'Foto documento – Frente' },
  fotoDocumentoReverso: { type: 'file', validations: {}, errors: {}, placeholder: 'Foto documento – Reverso' },
};

const DATA_STEP_2 = {
  correoElectronico: { type: 'text', validations: {}, errors: {}, placeholder: 'Ingrese	correo electrónico' },
  contrasena: { type: 'text', validations: {}, errors: {}, placeholder: 'Ingrese contraseña' },
  confirmacionContrasena: { type: 'text', validations: {}, errors: {}, placeholder: 'Ingrese confirmación de Contraseña' },
  numeroTelefono: {
    type: 'phone',
    validations: {
      pattern: /^\d{10}$/
    },
    errors: {
      pattern: 'Por favor ingrese un número de teléfono válido'
    },
    placeholder: 'Ingresa numero teléfono'
  },
  numeroCelular: {
    type: 'phone',
    validations: {
      pattern: /^\d{10}$/
    },
    errors: {
      pattern: 'Por favor ingrese un número de teléfono válido'
    },
    placeholder: 'Ingresa numero celular'
  },
};

const DATA_STEP_3 = {
  direccionResidencia: { type: 'textarea', validations: {}, errors: {}, placeholder: 'Ingresa dirección residencia' },
  codigoPostal: {
    type: 'number',
    validations: {
      required: true,
      minLength: 6
    },
    errors: {
      required: 'Este campo no puede dejarse en blanco',
      minlength: 'La longitud mínima debe ser de 6 caracteres.'
    },
    placeholder: 'Ingresar código postal'
  }
};

const STEP_ITEMS = [
  { label: 'Step 1', data: DATA_STEP_1 },
  { label: 'Step 2', data: DATA_STEP_2 },
  { label: 'Step 3', data: DATA_STEP_3 },
  { label: 'Review & Submit', data: {} }
];

export { STEP_ITEMS }
