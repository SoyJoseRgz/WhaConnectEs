const messages = {
	pt: {
	  translations: {
		signup: {
			title: "Regístrate",
			toasts: {
			  success: "¡Usuario creado con éxito! ¡Inicia sesión ahora!",
			  fail: "Error al crear usuario. Verifica la información proporcionada.",
  
		  },
		  form: {
			name: "Nombre",
			email: "Correo electrónico",
			password: "Contraseña",
		},
		buttons: {
			submit: "Registrarse",
			login: "¿Ya tienes una cuenta? ¡Inicia sesión!",
		},
		
		},
		login: {
			title: "Iniciar sesión",
			form: {
				email: "Correo electrónico",
				password: "Contraseña",
			},
			buttons: {
				submit: "Ingresar",
				register: "¿No tienes una cuenta? ¡Regístrate!",
			},
		},
		
		companies: {
			title: "Registrar Empresa",
			form: {
				name: "Nombre de la Empresa",
				plan: "Plan",
				token: "Token",
				submit: "Registrar",
				success: "¡Empresa creada con éxito!",
			},
		},
		
		auth: {
			toasts: {
				success: "¡Inicio de sesión exitoso!",
			},
			token: "Token",
		},
		
		dashboard: {
			charts: {
				perDay: {
					title: "Clientes nuevos de hoy: ",
				},
			},
		},
		
		connections: {
			title: "Conexiones",
			toasts: {
				deleted: "¡Conexión con WhatsApp eliminada con éxito!",
			},
			confirmationModal: {
				deleteTitle: "Eliminar",
				deleteMessage: "¿Estás seguro? Esta acción no se puede deshacer.",
				disconnectTitle: "Desconectar",
				disconnectMessage:
					"¿Estás seguro? Tendrás que escanear el código QR nuevamente.",
			},
			buttons: {
				add: "Agregar WhatsApp",
				disconnect: "Desconectar",
				tryAgain: "Intentar de nuevo",
				qrcode: "CÓDIGO QR",
				newQr: "Nuevo CÓDIGO QR",
				connecting: "Conectando",
			},
			toolTips: {
				disconnected: {
					title: "Error al iniciar sesión en WhatsApp",
					content:
						"Asegúrate de que tu teléfono esté conectado a Internet y vuelve a intentarlo, o solicita un nuevo código QR",
				},
				qrcode: {
					title: "Esperando lectura del código QR",
					content:
						"Haz clic en el botón 'CÓDIGO QR' y escanea el código QR con tu teléfono para iniciar sesión",
				},
				connected: {
					title: "¡Conexión establecida!",
				},
				timeout: {
					title: "Se perdió la conexión con el teléfono",
					content:
						"Asegúrate de que tu teléfono esté conectado a Internet y que WhatsApp esté abierto, o haz clic en el botón 'Desconectar' para obtener un nuevo código QR",
				},
			},
			table: {
				name: "Nombre",
				status: "Estado",
				lastUpdate: "Última actualización",
				default: "Predeterminado",
				actions: "Acciones",
				session: "Sesión",
			},
		},
		
		whatsappModal: {
			title: {
				add: "Agregar WhatsApp",
				edit: "Editar WhatsApp",
			},
			form: {
				name: "Nombre",
				default: "Predeterminado",
				sendIdQueue: "Fila",
				timeSendQueue: "Redirigir a la fila en X minutos",
				queueRedirection: "Redirección de Fila",
				queueRedirectionDesc: "Selecciona una fila para redirigir a los contactos que no tienen asignada una fila",
			},
			buttons: {
				okAdd: "Agregar",
				okEdit: "Guardar",
				cancel: "Cancelar",
			},
			success: "WhatsApp guardado con éxito.",
		},
		
		qrCode: {
			message: "Escanea el código QR para iniciar sesión",
		},
		contacts: {
			title: "Contactos",
			toasts: {
				deleted: "¡Contacto eliminado con éxito!",
			},
			searchPlaceholder: "Buscar...",
			confirmationModal: {
				deleteTitle: "Eliminar",
				importTitlte: "Importar contactos",
				deleteMessage:
					"¿Estás seguro de que quieres eliminar este contacto? Se perderán todas las interacciones relacionadas.",
				importMessage: "¿Quieres importar todos los contactos del teléfono?",
			},
			buttons: {
				import: "Importar Contactos",
				add: "Agregar Contacto",
			},
			table: {
				name: "Nombre",
				whatsapp: "WhatsApp",
				email: "Correo electrónico",
				actions: "Acciones",
			},
		},
		
		contactModal: {
			title: {
				add: "Agregar contacto",
				edit: "Editar contacto",
			},
			form: {
				mainInfo: "Datos del contacto",
				extraInfo: "Información adicional",
				name: "Nombre",
				number: "Número de WhatsApp",
				email: "Correo electrónico",
				extraName: "Nombre del campo",
				extraValue: "Valor",
			},
			buttons: {
				addExtraInfo: "Agregar información adicional",
				okAdd: "Agregar",
				okEdit: "Guardar",
				cancel: "Cancelar",
			},
			success: "Contacto guardado con éxito.",
		},
		
		queueModal: {
			title: {
				add: "Agregar fila",
				edit: "Editar fila",
			},
			form: {
				name: "Nombre",
				color: "Color",
				greetingMessage: "Mensaje de bienvenida",
				complationMessage: "Mensaje de despedida",
				outOfHoursMessage: "Mensaje fuera del horario laboral",
				ratingMessage: "Mensaje de calificación",
				token: "Token",
			},
			buttons: {
				okAdd: "Agregar",
				okEdit: "Guardar",
				cancel: "Cancelar",
			},
		},
		
		userModal: {
			title: {
			  add: "Agregar usuario",
			  edit: "Editar usuario",
			},
			form: {
			  name: "Nombre",
			  email: "Correo electrónico",
			  password: "Contraseña",
			  profile: "Perfil",
			},
			buttons: {
			  okAdd: "Agregar",
			  okEdit: "Guardar",
			  cancel: "Cancelar",
			},
			success: "Usuario guardado exitosamente.",
		  },
		  
		  scheduleModal: {
			title: {
			  add: "Nueva Agenda",
			  edit: "Editar Agenda",
			},
			form: {
			  body: "Mensaje",
			  contact: "Contacto",
			  sendAt: "Fecha de Agenda",
			  sentAt: "Fecha de Envío",
			},
			buttons: {
			  okAdd: "Agregar",
			  okEdit: "Guardar",
			  cancel: "Cancelar",
			},
			success: "Agenda guardado exitosamente.",
		  },
		  
		  tagModal: {
			title: {
			  add: "Nueva Etiqueta",
			  edit: "Editar Etiqueta",
			},
			form: {
			  name: "Nombre",
			  color: "Color",
			},
			buttons: {
			  okAdd: "Agregar",
			  okEdit: "Guardar",
			  cancel: "Cancelar",
			},
			success: "Etiqueta guardada exitosamente.",
		  },
		  
		  chat: {
			noTicketMessage: "Seleccione un ticket para comenzar la conversación.",
		  },
		  uploads: {
			titles: {
			  titleUploadMsgDragDrop: "ARRASTRE Y SUELTE ARCHIVOS EN EL CAMPO ABAJO",
			  titleFileList: "Lista de archivo(s)",
			},
		  },
			 
		  ticketsManager: {
			buttons: {
			  newTicket: "Nuevo",
			},
		  },
		  ticketsQueueSelect: {
			placeholder: "Filas",
		  },
		  tickets: {
			toasts: {
			  deleted: "El ticket en el que estabas fue eliminado.",
			},
			notification: {
			  message: "Mensaje de",
			},
			tabs: {
			  open: { title: "Abiertos" },
			  closed: { title: "Resueltos" },
			  search: { title: "Búsqueda" },
			},
			search: {
			  placeholder: "Buscar tickets y mensajes",
			},
			buttons: {
			  showAll: "Todos",
			},
		  },
		  
		  transferTicketModal: {
			title: "Transferir Ticket",
			fieldLabel: "Escribe para buscar usuarios",
			fieldQueueLabel: "Transferir a la fila",
			fieldQueuePlaceholder: "Seleccione una fila",
			noOptions: "No se encontraron usuarios con ese nombre",
			buttons: {
			  ok: "Transferir",
			  cancel: "Cancelar",
			},
		  },
		  
		  ticketsList: {
			pendingHeader: "Pendientes",
			assignedHeader: "Asignados",
			noTicketsTitle: "¡Nada aquí!",
			noTicketsMessage: "No se encontraron tickets con ese estado o término de búsqueda",
			buttons: {
			  accept: "Aceptar",
			  closed: "Cerrar",
			  reopen: "Reabrir",
			},
		  },
		  
		  newTicketModal: {
			title: "Crear Ticket",
			fieldLabel: "Escribe para buscar el contacto",
			add: "Agregar",
			buttons: {
			  ok: "Guardar",
			  cancel: "Cancelar",
			},
		  },
		  
		  mainDrawer: {
			listItems: {
			  dashboard: "Dashboard",
			  connections: "Conexiones",
			  tickets: "Tickets",
			  quickMessages: "Respuestas Rápidas",
			  contacts: "Contactos",
			  queues: "Filas & Departamentos",
			  tags: "Etiquetas",
			  administration: "Administración",
			  users: "Usuarios",
			  settings: "Configuraciones",
			  helps: "Ayuda",
			  messagesAPI: "API de Mensajes",
			  schedules: "Agenda",
			  campaigns: "Campañas",
			  annoucements: "Anuncios",
			  chats: "Chat Interno",
			  financeiro: "Financiero",
			},
			appBar: {
			  user: {
				profile: "Perfil",
				logout: "Cerrar sesión",
			  },
			},
		  },
		  
		  messagesAPI: {
			title: "API",
			textMessage: {
			  number: "Número",
			  body: "Mensaje",
			  token: "Token registrado",
			},
			mediaMessage: {
			  number: "Número",
			  body: "Nombre del archivo",
			  media: "Archivo",
			  token: "Token registrado",
			},
		  },
		  
		  notifications: {
			noTickets: "Ninguna notificación.",
		  },
		  quickMessages: {
			title: "Respuestas Rápidas",
			buttons: {
			  add: "Nueva Respuesta",
			},
			dialog: {
			  shortcode: "Código abreviado",
			  message: "Respuesta",
			},
		  },
		  
		  contactLists: {
			title: "Listas de Contactos",
			table: {
				name: "Nombre",
				contacts: "Contactos",
				actions: "Acciones",
			},
			buttons: {
				add: "Nueva Lista",
			},
			dialog: {
				name: "Nombre",
				company: "Empresa",
				okEdit: "Editar",
				okAdd: "Agregar",
				add: "Agregar",
				edit: "Editar",
				cancel: "Cancelar",
			},
			confirmationModal: {
				deleteTitle: "Eliminar",
				deleteMessage: "Esta acción no se puede deshacer.",
			},
			toasts: {
				deleted: "Registro eliminado",
			},
		},
		
		contactListItems: {
			title: "Contactos",
			searchPlaceholder: "Buscar",
			buttons: {
				add: "Nuevo",
				lists: "Listas",
				import: "Importar",
			},
			dialog: {
				name: "Nombre",
				number: "Número",
				whatsapp: "WhatsApp",
				email: "Correo electrónico",
				okEdit: "Editar",
				okAdd: "Agregar",
				add: "Agregar",
				edit: "Editar",
				cancel: "Cancelar",
			},
			table: {
				name: "Nombre",
				number: "Número",
				whatsapp: "WhatsApp",
				email: "Correo electrónico",
				actions: "Acciones",
			},
			confirmationModal: {
				deleteTitle: "Eliminar",
				deleteMessage: "Esta acción no se puede deshacer.",
				importMessage: "¿Quieres importar los contactos de esta hoja de cálculo?",
				importTitlte: "Importar",
			},
			toasts: {
				deleted: "Registro eliminado",
			},
		},
		
		campaigns: {
			title: "Campañas",
			searchPlaceholder: "Buscar",
			buttons: {
				add: "Nueva Campaña",
				contactLists: "Listas de Contactos",
			},
			table: {
				name: "Nombre",
				whatsapp: "Conexión",
				contactList: "Lista de Contactos",
				status: "Estado",
				scheduledAt: "Programada para",
				completedAt: "Completada",
				confirmation: "Confirmación",
				actions: "Acciones",
			},
			dialog: {
				new: "Nueva Campaña",
				update: "Editar Campaña",
				readonly: "Solo Lectura",
				form: {
					name: "Nombre",
					message1: "Mensaje 1",
					message2: "Mensaje 2",
					message3: "Mensaje 3",
					message4: "Mensaje 4",
					message5: "Mensaje 5",
					confirmationMessage1: "Mensaje de Confirmación 1",
					confirmationMessage2: "Mensaje de Confirmación 2",
					confirmationMessage3: "Mensaje de Confirmación 3",
					confirmationMessage4: "Mensaje de Confirmación 4",
					confirmationMessage5: "Mensaje de Confirmación 5",
					messagePlaceholder: "Contenido del mensaje",
					whatsapp: "Conexión",
					status: "Estado",
					scheduledAt: "Programada para",
					confirmation: "Confirmación",
					contactList: "Lista de Contacto",
				},
				buttons: {
					add: "Agregar",
					edit: "Actualizar",
					okadd: "Ok",
					cancel: "Cancelar Envíos",
					restart: "Reiniciar Envíos",
					close: "Cerrar",
					attach: "Adjuntar Archivo",
				},
			},
			confirmationModal: {
				deleteTitle: "Eliminar",
				deleteMessage: "Esta acción no se puede deshacer.",
			},
			toasts: {
				success: "Operación realizada con éxito",
				cancel: "Campaña cancelada",
				restart: "Campaña reiniciada",
				deleted: "Registro eliminado",
			},
		},
		
		announcements: {
			title: "Anuncios",
			searchPlaceholder: "Buscar",
			buttons: {
				add: "Nuevo Anuncio",
				contactLists: "Listas de Anuncios",
			},
			table: {
				priority: "Prioridad",
				title: "Título",
				text: "Texto",
				mediaName: "Archivo",
				status: "Estado",
				actions: "Acciones",
			},
			dialog: {
				edit: "Edición de Anuncio",
				add: "Nuevo Anuncio",
				update: "Editar Anuncio",
				readonly: "Solo Lectura",
				form: {
					priority: "Prioridad",
					title: "Título",
					text: "Texto",
					mediaPath: "Archivo",
					status: "Estado",
				},
				buttons: {
					add: "Agregar",
					edit: "Actualizar",
					okadd: "Ok",
					cancel: "Cancelar",
					close: "Cerrar",
					attach: "Adjuntar Archivo",
				},
			},
			confirmationModal: {
				deleteTitle: "Eliminar",
				deleteMessage: "Esta acción no se puede deshacer.",
			},
			toasts: {
				success: "Operación realizada con éxito",
				deleted: "Registro eliminado",
			},
		},
		
		campaignsConfig: {
			title: "Configuración de Campañas",
		},
		queues: {
			title: "Filas & Departamentos",
			table: {
				name: "Nombre",
				color: "Color",
				greeting: "Mensaje de bienvenida",
				actions: "Acciones",
			},
			buttons: {
				add: "Agregar cola",
			},
			confirmationModal: {
				deleteTitle: "Eliminar",
				deleteMessage:
					"¿Estás seguro? ¡Esta acción no se puede deshacer! Las interacciones de esta cola seguirán existiendo, pero ya no estarán asignadas a ninguna cola.",
			},
		},
		
		queueSelect: {
			inputLabel: "Filas",
		},
		users: {
			title: "Usuarios",
			table: {
				name: "Nombre",
				email: "Correo electrónico",
				profile: "Perfil",
				actions: "Acciones",
			},
			buttons: {
				add: "Agregar usuario",
			},
			toasts: {
				deleted: "Usuario eliminado con éxito.",
			},
			confirmationModal: {
				deleteTitle: "Eliminar",
				deleteMessage:
					"Se perderán todos los datos del usuario. Las interacciones abiertas por este usuario se trasladarán a la cola.",
			},
		},
		
		helps: {
			title: "Centro de Ayuda",
		},
		schedules: {
			title: "Agenda",
			confirmationModal: {
				deleteTitle: "¿Estás seguro de que quieres eliminar esta Agenda?",
				deleteMessage: "Esta acción no se puede deshacer.",
			},
			table: {
				contact: "Contacto",
				body: "Mensaje",
				sendAt: "Fecha de Agenda",
				sentAt: "Fecha de Envío",
				status: "Estado",
				actions: "Acciones",
			},
			buttons: {
				add: "Nueva Agenda",
			},
			toasts: {
				deleted: "Agenda eliminado con éxito.",
			},
		},
		
		tags: {
			title: "Etiquetas",
			confirmationModal: {
				deleteTitle: "¿Estás seguro de que quieres eliminar esta Etiqueta?",
				deleteMessage: "Esta acción no se puede deshacer.",
			},
			table: {
				name: "Nombre",
				color: "Color",
				tickets: "Registros Etiquetados",
				actions: "Acciones",
			},
			buttons: {
				add: "Nueva Etiqueta",
			},
			toasts: {
				deleted: "Etiqueta eliminada con éxito.",
			},
		},
		
		settings: {
			success: "Configuraciones guardadas con éxito.",
			title: "Configuraciones",
			settings: {
				userCreation: {
					name: "Creación de usuario",
					options: {
						enabled: "Habilitado",
						disabled: "Deshabilitado",
					},
				},
			},
		},
		
		messagesList: {
			header: {
				assignedTo: "Asignado a:",
				buttons: {
					return: "Volver",
					resolve: "Resolver",
					reopen: "Reabrir",
					accept: "Aceptar",
				},
			},
		},
		messagesInput: {
			placeholderOpen: "Escribe un mensaje",
			placeholderClosed: "Reabra o acepte este ticket para enviar un mensaje.",
			signMessage: "Firmar",
		},
		
		contactDrawer: {
			header: "Datos del contacto",
			buttons: {
				edit: "Editar contacto",
			},
			extraInfo: "Otra información",
		},
		ticketOptionsMenu: {
			schedule: "Agenda",
			delete: "Eliminar",
			transfer: "Transferir",
			registerAppointment: "Observaciones del Contacto",
			appointmentsModal: {
				title: "Observaciones del Contacto",
				textarea: "Observación",
				placeholder: "Ingresa aquí la información que deseas registrar",
			},
			confirmationModal: {
				title: "Eliminar el ticket del contacto",
				message: "¡Atención! Todas las mensajes relacionadas con el ticket se perderán.",
			},
			buttons: {
				delete: "Eliminar",
				cancel: "Cancelar",
			},
		},
		
		confirmationModal: {
			buttons: {
				confirm: "Aceptar",
				cancel: "Cancelar",
			},
		},
		messageOptionsMenu: {
			delete: "Eliminar",
			reply: "Responder",
			confirmationModal: {
				title: "¿Eliminar mensaje?",
				message: "Esta acción no se puede deshacer.",
			},
		},
		
		backendErrors: {
			ERR_NO_OTHER_WHATSAPP: "Debe haber al menos un WhatsApp predeterminado.",
			ERR_NO_DEF_WAPP_FOUND: "Ningún WhatsApp predeterminado encontrado. Verifica la página de conexiones.",
			ERR_WAPP_NOT_INITIALIZED: "Esta sesión de WhatsApp no ha sido inicializada. Verifica la página de conexiones.",
			ERR_WAPP_CHECK_CONTACT: "No se pudo verificar el contacto de WhatsApp. Verifica la página de conexiones.",
			ERR_WAPP_INVALID_CONTACT: "Este no es un número de WhatsApp válido.",
			ERR_WAPP_DOWNLOAD_MEDIA: "No se pudo descargar medios de WhatsApp. Verifica la página de conexiones.",
			ERR_INVALID_CREDENTIALS: "Error de autenticación. Por favor, inténtalo de nuevo.",
			ERR_SENDING_WAPP_MSG: "Error al enviar mensaje de WhatsApp. Verifica la página de conexiones.",
			ERR_DELETE_WAPP_MSG: "No se pudo eliminar el mensaje de WhatsApp.",
			ERR_OTHER_OPEN_TICKET: "Ya hay un ticket abierto para este contacto.",
			ERR_SESSION_EXPIRED: "Sesión expirada. Por favor, inicia sesión.",
			ERR_USER_CREATION_DISABLED: "La creación de usuarios ha sido deshabilitada por el administrador.",
			ERR_NO_PERMISSION: "No tienes permisos para acceder a este recurso.",
			ERR_DUPLICATED_CONTACT: "Ya existe un contacto con este número.",
			ERR_NO_SETTING_FOUND: "No se encontró ninguna configuración con este ID.",
			ERR_NO_CONTACT_FOUND: "No se encontró ningún contacto con este ID.",
			ERR_NO_TICKET_FOUND: "No se encontró ningún ticket con este ID.",
			ERR_NO_USER_FOUND: "No se encontró ningún usuario con este ID.",
			ERR_NO_WAPP_FOUND: "No se encontró ningún WhatsApp con este ID.",
			ERR_CREATING_MESSAGE: "Error al crear el mensaje en la base de datos.",
			ERR_CREATING_TICKET: "Error al crear el ticket en la base de datos.",
			ERR_FETCH_WAPP_MSG: "Error al buscar el mensaje en WhatsApp, tal vez sea muy antiguo.",
			ERR_QUEUE_COLOR_ALREADY_EXISTS: "Este color ya está en uso, elige otro.",
			ERR_WAPP_GREETING_REQUIRED: "El mensaje de saludo es obligatorio cuando hay más de una fila.",
		},
		
	  },
	},
  };
  
  export { messages };