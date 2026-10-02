import { Injectable, computed, signal } from '@angular/core';

export type Language = 'en' | 'fr' | 'it';

export const LANGUAGES: { code: Language; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
  { code: 'it', label: 'Italiano' },
];

const STORAGE_KEY = 'kds_language';

type Dictionary = Record<string, string>;

const en: Dictionary = {
  'app.subtitle': 'Kitchen display',
  'type.all': 'All',
  'type.dine_in': 'Dine-in',
  'type.takeaway': 'Takeaway',
  'type.delivery': 'Delivery',
  'status.pending': 'New',
  'status.preparing': 'Preparing',
  'status.ready': 'Ready',
  'status.picked_up': 'Picked Up',
  'action.pending': 'Back to New',
  'action.preparing': 'Start Preparing',
  'action.ready': 'Mark Ready',
  'action.picked_up': 'Mark Picked Up',
  'action.recall': 'Recall',
  'board.allStations': 'All stations',
  'board.station': 'Station',
  'board.noTickets': 'No tickets',
  'board.loading': 'Loading orders…',
  'board.live': 'Connected',
  'board.reconnecting': 'Reconnecting',
  'board.table': 'Table',
  'board.walkIn': 'Walk-in',
  'board.orderNote': 'Order note',
  'board.keyboardHint': 'Tab or arrow keys to move between tickets · Enter to advance',
  'board.sound': 'Sound',
  'board.on': 'On',
  'board.off': 'Off',
  'board.settings': 'Settings',
  'board.filterByType': 'Filter orders by type',
  'board.ticketCount': '{count} tickets',
  'announce.newOrder': 'New order {ref}',
  'announce.moved': 'Order {ref} moved to {status}',
  'announce.nothingSelected': 'Select a ticket first',
  'settings.title': 'Settings',
  'settings.site': 'Site',
  'settings.language': 'Language',
  'settings.display': 'Display',
  'settings.light': 'Light',
  'settings.dark': 'Dark',
  'settings.sound': 'New order sound',
  'settings.soundEnabled': 'Play a sound when an order arrives',
  'settings.repeat': 'How often',
  'settings.repeatOnce': 'Once',
  'settings.repeatUntilStarted': 'Repeat until started',
  'settings.repeatHint': 'Rings again every 10 seconds while a new order is waiting to be started.',
  'settings.preview': 'Play',
  'settings.logout': 'Log out',
  'settings.done': 'Done',
  'sound.chime': 'Chime',
  'sound.bell': 'Bell',
  'sound.dingdong': 'Ding-dong',
  'sound.alert': 'Alert',
};

const fr: Dictionary = {
  'app.subtitle': 'Écran de cuisine',
  'type.all': 'Tout',
  'type.dine_in': 'Sur place',
  'type.takeaway': 'À emporter',
  'type.delivery': 'Livraison',
  'status.pending': 'Nouveau',
  'status.preparing': 'En préparation',
  'status.ready': 'Prêt',
  'status.picked_up': 'Récupéré',
  'action.pending': 'Retour à Nouveau',
  'action.preparing': 'Commencer',
  'action.ready': 'Marquer prêt',
  'action.picked_up': 'Marquer récupéré',
  'action.recall': 'Rappeler',
  'board.allStations': 'Tous les postes',
  'board.station': 'Poste',
  'board.noTickets': 'Aucun ticket',
  'board.loading': 'Chargement des commandes…',
  'board.live': 'Connecté',
  'board.reconnecting': 'Reconnexion',
  'board.table': 'Table',
  'board.walkIn': 'Client direct',
  'board.orderNote': 'Note de commande',
  'board.keyboardHint': 'Tab ou flèches pour naviguer · Entrée pour avancer',
  'board.sound': 'Son',
  'board.on': 'Activé',
  'board.off': 'Désactivé',
  'board.settings': 'Paramètres',
  'board.filterByType': 'Filtrer les commandes par type',
  'board.ticketCount': '{count} tickets',
  'announce.newOrder': 'Nouvelle commande {ref}',
  'announce.moved': 'Commande {ref} déplacée vers {status}',
  'announce.nothingSelected': "Sélectionnez d'abord un ticket",
  'settings.title': 'Paramètres',
  'settings.site': 'Site',
  'settings.language': 'Langue',
  'settings.display': 'Affichage',
  'settings.light': 'Clair',
  'settings.dark': 'Sombre',
  'settings.sound': 'Son des nouvelles commandes',
  'settings.soundEnabled': "Jouer un son à l'arrivée d'une commande",
  'settings.repeat': 'Fréquence',
  'settings.repeatOnce': 'Une fois',
  'settings.repeatUntilStarted': "Répéter jusqu'au démarrage",
  'settings.repeatHint': 'Sonne toutes les 10 secondes tant qu\'une nouvelle commande attend.',
  'settings.preview': 'Écouter',
  'settings.logout': 'Se déconnecter',
  'settings.done': 'Terminé',
  'sound.chime': 'Carillon',
  'sound.bell': 'Cloche',
  'sound.dingdong': 'Ding-dong',
  'sound.alert': 'Alerte',
};

const it: Dictionary = {
  'app.subtitle': 'Display cucina',
  'type.all': 'Tutti',
  'type.dine_in': 'Al tavolo',
  'type.takeaway': 'Da asporto',
  'type.delivery': 'Consegna',
  'status.pending': 'Nuovo',
  'status.preparing': 'In preparazione',
  'status.ready': 'Pronto',
  'status.picked_up': 'Ritirato',
  'action.pending': 'Torna a Nuovo',
  'action.preparing': 'Inizia preparazione',
  'action.ready': 'Segna pronto',
  'action.picked_up': 'Segna ritirato',
  'action.recall': 'Richiama',
  'board.allStations': 'Tutte le postazioni',
  'board.station': 'Postazione',
  'board.noTickets': 'Nessun ordine',
  'board.loading': 'Caricamento ordini…',
  'board.live': 'Connesso',
  'board.reconnecting': 'Riconnessione',
  'board.table': 'Tavolo',
  'board.walkIn': 'Cliente al banco',
  'board.orderNote': "Nota dell'ordine",
  'board.keyboardHint': 'Tab o frecce per spostarsi · Invio per avanzare',
  'board.sound': 'Suono',
  'board.on': 'Attivo',
  'board.off': 'Disattivo',
  'board.settings': 'Impostazioni',
  'board.filterByType': 'Filtra gli ordini per tipo',
  'board.ticketCount': '{count} ordini',
  'announce.newOrder': 'Nuovo ordine {ref}',
  'announce.moved': 'Ordine {ref} spostato in {status}',
  'announce.nothingSelected': 'Seleziona prima un ordine',
  'settings.title': 'Impostazioni',
  'settings.site': 'Sede',
  'settings.language': 'Lingua',
  'settings.display': 'Schermo',
  'settings.light': 'Chiaro',
  'settings.dark': 'Scuro',
  'settings.sound': 'Suono nuovi ordini',
  'settings.soundEnabled': "Riproduci un suono all'arrivo di un ordine",
  'settings.repeat': 'Frequenza',
  'settings.repeatOnce': 'Una volta',
  'settings.repeatUntilStarted': 'Ripeti finché non inizia',
  'settings.repeatHint': 'Suona ogni 10 secondi finché un nuovo ordine è in attesa.',
  'settings.preview': 'Ascolta',
  'settings.logout': 'Esci',
  'settings.done': 'Fatto',
  'sound.chime': 'Carillon',
  'sound.bell': 'Campana',
  'sound.dingdong': 'Din-don',
  'sound.alert': 'Allarme',
};

const DICTIONARIES: Record<Language, Dictionary> = { en, fr, it };

/**
 * Runtime translations for the board. A kiosk switches language from its own
 * settings screen without a rebuild or reload, so this reads a signal rather
 * than using Angular's compile-time i18n. Templates call `i18n.t(...)`; the
 * signal read makes OnPush components re-render when the language changes.
 */
@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly _language = signal<Language>(this.initialLanguage());
  readonly language = this._language.asReadonly();
  /** BCP-47 tag for Intl date/time formatting. */
  readonly locale = computed(() => ({ en: 'en-GB', fr: 'fr-FR', it: 'it-IT' })[this._language()]);

  constructor() {
    document.documentElement.lang = this._language();
  }

  setLanguage(language: Language): void {
    this._language.set(language);
    localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
  }

  t(key: string, params?: Record<string, string | number>): string {
    const text = DICTIONARIES[this._language()][key] ?? en[key] ?? key;
    return params ? text.replace(/\{(\w+)\}/g, (_, name) => String(params[name] ?? '')) : text;
  }

  private initialLanguage(): Language {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === 'fr' || saved === 'it' ? saved : 'en';
  }
}
