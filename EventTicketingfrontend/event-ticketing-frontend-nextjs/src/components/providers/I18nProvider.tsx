/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// components/providers/I18nProvider.tsx
'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';

// Enhanced language definitions
export const SUPPORTED_LANGUAGES = [
    {
        code: 'en',
        name: 'English',
        nativeName: 'English',
        flag: '🇺🇸',
        direction: 'ltr',
        region: 'US',
        dateFormat: 'MM/dd/yyyy',
        timeFormat: '12h',
        currency: 'USD'
    },
    {
        code: 'es',
        name: 'Spanish',
        nativeName: 'Español',
        flag: '🇪🇸',
        direction: 'ltr',
        region: 'ES',
        dateFormat: 'dd/MM/yyyy',
        timeFormat: '24h',
        currency: 'EUR'
    },
    {
        code: 'fr',
        name: 'French',
        nativeName: 'Français',
        flag: '🇫🇷',
        direction: 'ltr',
        region: 'FR',
        dateFormat: 'dd/MM/yyyy',
        timeFormat: '24h',
        currency: 'EUR'
    },
    {
        code: 'de',
        name: 'German',
        nativeName: 'Deutsch',
        flag: '🇩🇪',
        direction: 'ltr',
        region: 'DE',
        dateFormat: 'dd.MM.yyyy',
        timeFormat: '24h',
        currency: 'EUR'
    },
    {
        code: 'it',
        name: 'Italian',
        nativeName: 'Italiano',
        flag: '🇮🇹',
        direction: 'ltr',
        region: 'IT',
        dateFormat: 'dd/MM/yyyy',
        timeFormat: '24h',
        currency: 'EUR'
    }
];

// Enhanced translation keys including event forms
export interface TranslationKeys {
    // Common
    save: string;
    cancel: string;
    delete: string;
    edit: string;
    view: string;
    loading: string;
    error: string;
    success: string;
    confirm: string;
    back: string;
    create: string;
    update: string;

    // Navigation
    dashboard: string;
    events: string;
    settings: string;
    profile: string;
    logout: string;

    // Settings
    personalInformation: string;
    organization: string;
    notifications: string;
    security: string;
    appearance: string;
    language: string;
    preferences: string;

    // Profile
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    companyName: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;

    // Events
    createEvent: string;
    editEvent: string;
    eventTitle: string;
    eventDescription: string;
    eventDate: string;
    eventTime: string;
    eventLocation: string;
    ticketPrice: string;
    yourEvents: string;
    createYourFirstEvent: string;
    createFirstEventPrompt: string;
    eventsSubtitle: string;
    allEvents: string;
    searchEvents: string;
    unpublished: string;
    noDescriptionAvailable: string;
    dateNotSet: string;
    invalidDate: string;
    timeNotSet: string;
    invalidTime: string;
    confirmDeleteEvent: string;
    failedToDeleteEvent: string;
    failedToTogglePublish: string;
    noEventsMatchSearch: string;
    adjustSearchCriteria: string;

    // Event Form - New translations
    createNewEvent: string;
    editEventDetails: string;
    fillEventDetails: string;
    updateEventDetails: string;
    basicInformation: string;
    eventTitleRequired: string;
    enterEventTitle: string;
    descriptionRequired: string;
    describeEventDetail: string;
    categoryRequired: string;
    selectCategory: string;
    maxCapacityRequired: string;
    maximumAttendees: string;
    eventImageUrl: string;
    enterImageUrl: string;

    // Date & Time Section
    dateTime: string;
    multiDayEvent: string;
    dayEvent: string;
    startDateTime: string;
    startDateTimeRequired: string;
    endDateTime: string;
    leaveEmptySingleSession: string;
    endDateAfterStart: string;
    registrationDeadline: string;
    whenRegistrationClose: string;
    registrationDeadlineBeforeEvent: string;

    // Location Section
    location: string;
    onlineEvent: string;
    venueRequired: string;
    selectVenue: string;
    locationDetails: string;
    meetingLinkPlatform: string;
    additionalLocationInfo: string;

    // Ticket Types Section
    ticketTypes: string;
    addTicketType: string;
    ticketTypesCount: string;
    totalTypes: string;
    editable: string;
    locked: string;
    noTicketTypesYet: string;
    addTicketTypesToStart: string;
    createFirstTicketType: string;
    ticketTypeName: string;
    ticketTypeNameRequired: string;
    ticketDescription: string;
    optionalTicketDescription: string;
    price: string;
    priceRequired: string;
    quantity: string;
    quantityRequired: string;
    quantityGreaterThanZero: string;
    ticketActive: string;
    availableForPurchase: string;
    createTicketType: string;
    updateTicketType: string;
    editTicketType: string;

    // Smart Editing System
    smartTicketEditing: string;
    whenCanEdit: string;
    eventDraftStatus: string;
    noTicketsSold: string;
    eventNotPublished: string;
    whenEditingLocked: string;
    eventIsPublished: string;
    ticketsAlreadySold: string;
    eventStatusNotDraft: string;
    safeToEdit: string;
    lockedToPreserve: string;
    ticketsSoldCount: string;
    cannotCreateTicketTypes: string;
    salesDataIntegrity: string;

    // Publishing
    publishingOptions: string;
    publishEventImmediately: string;
    makeVisiblePublic: string;
    publishUnpublishLater: string;
    currentlyPublished: string;
    currentlyUnpublished: string;
    usePublishButtons: string;
    changePublishStatus: string;

    // Form Validation
    fixErrorsBelow: string;
    formValidationError: string;
    requiredField: string;
    invalidInput: string;

    // Success/Error Messages
    eventCreatedSuccessfully: string;
    eventUpdatedSuccessfully: string;
    ticketTypeCreatedSuccessfully: string;
    ticketTypeUpdatedSuccessfully: string;
    failedToCreateEvent: string;
    failedToUpdateEvent: string;
    failedToCreateTicketType: string;
    failedToUpdateTicketType: string;
    creatingEvent: string;
    updatingEvent: string;
    redirectingToDashboard: string;
    redirectingToEventDetail: string;

    // Capacity and Venues
    capacity: string;
    venue: string;
    selectAVenue: string;
    venueWithCapacity: string;

    // Categories
    category: string;
    technology: string;
    business: string;
    music: string;
    sports: string;
    education: string;

    // Event States
    published: string;
    draft: string;
    online: string;
    inPerson: string;

    // Multi-day events
    multiDaySchedule: string;

    // Venue Management - New translations
    venues: string;
    createVenue: string;
    venueName: string;
    venueNameRequired: string;
    enterVenueName: string;
    venueAddress: string;
    addressRequired: string;
    enterVenueAddress: string;
    venueState: string;
    enterState: string;
    enterStateOptional: string;
    venueCountry: string;
    countryRequired: string;
    enterCountry: string;
    venueZipCode: string;
    enterZipCode: string;
    enterZipCodeOptional: string;
    capacityRequired: string;
    maximumCapacity: string;
    contactEmail: string;
    contactPhone: string;
    website: string;
    latitude: string;
    longitude: string;
    description: string;
    venueDescription: string;
    describeVenue: string;
    venueImageUrl: string;
    validEmailRequired: string;
    latitudeBetween: string;
    longitudeBetween: string;
    optionalMapIntegration: string;
    createNewVenue: string;
    venueCreatedSuccessfully: string;
    failedToCreateVenue: string;
    failedToFetchVenues: string;
    creatingVenue: string;
    loadingVenues: string;
    searchVenues: string;
    allCities: string;
    noVenuesFound: string;
    adjustFilters: string;
    getStartedFirstVenue: string;
    venueLocation: string;
    venueCapacity: string;
    venueEvents: string;
    venueStatus: string;
    active: string;
    inactive: string;
    eventsCount: string;
    viewAvailableVenues: string;
    createNewOnes: string;

    // Ticket Management - New translations
    tickets: string;
    ticketManagement: string;
    manageTicketTypes: string;
    validateTickets: string;
    checkIn: string;
    ticketValidation: string;
    ticketCheckIn: string;
    ticketsAndCheckIn: string;

    // Ticket Types Management
    createTicketTypeAction: string;
    ticketTypeLimitations: string;
    publishedEventsRestriction: string;
    eventsWithSalesRestriction: string;
    draftStatusRequired: string;
    alternativeCreateEvent: string;
    onlyWorksForDraft: string;
    createNewEventLink: string;
    manageEventsLink: string;

    // Ticket Form
    selectAnEvent: string;
    ticketCreationRequirements: string;
    eventMustBeDraft: string;
    noExistingTicketSales: string;
    mustBeEventOrganizer: string;
    editTicketsDuringCreation: string;
    ticketEvent: string;
    eventRequired: string;
    noEventsFound: string;
    needCreateEventFirst: string;

    // Ticket Types Display
    loadingTicketTypes: string;
    noTicketTypesFound: string;
    adjustFiltersOrCreate: string;
    createFirstTicketTypePrompt: string;
    ticketType: string;
    event: string;
    availability: string;
    status: string;
    remaining: string;

    // Validation Tab
    validateTicket: string;
    enterTicketNumber: string;
    validating: string;
    validate: string;
    validTicket: string;
    invalidTicket: string;
    ticketNumber: string;
    attendeeName: string;
    alreadyUsed: string;
    notUsed: string;

    // Check-in Tab
    checkInTicket: string;
    enterTicketNumberCheckIn: string;
    checkingIn: string;
    ticketCheckedInSuccessfully: string;

    // Ticket Warnings
    importantTicketLimitations: string;
    cannotModifyPublished: string;
    editingLockedAfterSales: string;
    draftStatusForCreation: string;
    createNewEventAlternative: string;

    // Business Rules
    businessRulesWarning: string;

    // Ticket States
    ticketInactive: string;

    // General UI
    optional: string;
    required: string;

    // Appearance
    theme: string;
    lightMode: string;
    darkMode: string;
    autoMode: string;
    accentColor: string;
    fontSize: string;
    compactMode: string;

    // Time and Date
    timeFormat: string;
    dateFormat: string;
    currency: string;
    timezone: string;

    // Messages
    saveSuccess: string;
    saveError: string;
    loadError: string;

    // Dashboard specific (keeping existing ones)
    welcomeBack: string;
    virtualEvent: string;
    viewAllEvents: string;
    upcomingEvents: string;
    unpublish: string;
    unlimited: string;
    uncategorized: string;
    totalRevenue: string;
    totalEvents: string;
    ticketsSold: string;
    revenue: string;
    publish: string;
    noEventsYet: string;
    maxCapacity: string;
    loadingDashboard: string;
    dashboardError: string;
    publishedCount: string;
}

// Helper function for string interpolation
const interpolate = (str: string, params: Record<string, any> = {}): string => {
    return str.replace(/\{\{(\w+)\}\}/g, (match, key) => {
        return params[key] !== undefined ? String(params[key]) : match;
    }).replace(/\{(\w+)\}/g, (match, key) => {
        return params[key] !== undefined ? String(params[key]) : match;
    });
};

// Complete translation data for all 5 languages
const translations: Record<string, TranslationKeys> = {
    en: {
        // Common
        save: 'Save',
        cancel: 'Cancel',
        delete: 'Delete',
        edit: 'Edit',
        view: 'View',
        loading: 'Loading...',
        error: 'Error',
        success: 'Success',
        confirm: 'Confirm',
        back: 'Back',
        create: 'Create',
        update: 'Update',

        // Navigation
        dashboard: 'Dashboard',
        events: 'Events',
        settings: 'Settings',
        profile: 'Profile',
        logout: 'Logout',

        // Settings
        personalInformation: 'Personal Information',
        organization: 'Organization',
        notifications: 'Notifications',
        security: 'Security',
        appearance: 'Appearance',
        language: 'Language',
        preferences: 'Preferences',

        // Profile
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email',
        phoneNumber: 'Phone Number',
        companyName: 'Company Name',
        address: 'Address',
        city: 'City',
        state: 'State',
        zipCode: 'ZIP Code',
        country: 'Country',

        // Events
        createEvent: 'Create Event',
        editEvent: 'Edit Event',
        eventTitle: 'Event Title',
        eventDescription: 'Event Description',
        eventDate: 'Event Date',
        eventTime: 'Event Time',
        eventLocation: 'Event Location',
        ticketPrice: 'Ticket Price',
        yourEvents: 'Your Events',
        createYourFirstEvent: 'Create Your First Event',
        createFirstEventPrompt: 'Create your first event to get started with EventPro.',
        eventsSubtitle: 'Manage your events and track their performance',
        allEvents: 'All Events',
        unpublished: 'Unpublished',
        searchEvents: 'Search events...',
        noDescriptionAvailable: 'No description available',
        dateNotSet: 'Date not set',
        invalidDate: 'Invalid date',
        timeNotSet: 'Time not set',
        invalidTime: 'Invalid time',
        confirmDeleteEvent: 'Are you sure you want to delete "{title}"? This action cannot be undone.',
        failedToDeleteEvent: 'Failed to delete event',
        failedToTogglePublish: 'Failed to {action} event',
        noEventsMatchSearch: 'No events match your search',
        adjustSearchCriteria: 'Try adjusting your search or filter criteria',

        // Event Form
        createNewEvent: 'Create New Event',
        editEventDetails: 'Edit Event',
        fillEventDetails: 'Fill out the details to create your event',
        updateEventDetails: 'Update your event details',
        basicInformation: 'Basic Information',
        eventTitleRequired: 'Event title is required',
        enterEventTitle: 'Enter event title',
        descriptionRequired: 'Event description is required',
        describeEventDetail: 'Describe your event in detail...',
        categoryRequired: 'Category is required',
        selectCategory: 'Select category',
        maxCapacityRequired: 'Maximum capacity must be greater than 0',
        maximumAttendees: 'Maximum attendees',
        eventImageUrl: 'Event Image URL',
        enterImageUrl: 'https://example.com/event-image.jpg',

        // Date & Time
        dateTime: 'Date & Time',
        multiDayEvent: 'Multi-day event: {count} days',
        dayEvent: '{count} day event',
        startDateTime: 'Start Date & Time',
        startDateTimeRequired: 'Event start date is required',
        endDateTime: 'End Date & Time',
        leaveEmptySingleSession: 'Leave empty for single session events',
        endDateAfterStart: 'End date must be after start date',
        registrationDeadline: 'Registration Deadline',
        whenRegistrationClose: 'When should registration close? (optional)',
        registrationDeadlineBeforeEvent: 'Registration deadline must be before event start',

        // Location
        location: 'Location',
        onlineEvent: 'This is an online event',
        venueRequired: 'Venue is required for in-person events',
        selectVenue: 'Select venue',
        locationDetails: 'Location Details',
        meetingLinkPlatform: 'Meeting link or platform details',
        additionalLocationInfo: 'Additional location information',

        // Ticket Types
        ticketTypes: 'Ticket Types',
        addTicketType: 'Add Ticket Type',
        ticketTypesCount: 'Ticket Types',
        totalTypes: 'Total Types',
        editable: 'Editable',
        locked: 'Locked',
        noTicketTypesYet: 'No ticket types yet',
        addTicketTypesToStart: 'Add ticket types to start selling tickets for your event',
        createFirstTicketType: 'Create First Ticket Type',
        ticketTypeName: 'Ticket Name',
        ticketTypeNameRequired: 'Ticket name is required',
        ticketDescription: 'Description',
        optionalTicketDescription: 'Optional description for this ticket type',
        price: 'Price (RM)',
        priceRequired: 'Valid price is required',
        quantity: 'Quantity',
        quantityRequired: 'Ticket quantity must be greater than 0',
        quantityGreaterThanZero: 'Quantity must be greater than 0',
        ticketActive: 'Active (available for purchase)',
        availableForPurchase: 'Available for purchase',
        createTicketType: 'Create Ticket Type',
        updateTicketType: 'Update Ticket Type',
        editTicketType: 'Edit Ticket Type',

        // Smart Editing
        smartTicketEditing: '💡 Smart Ticket Type Editing',
        whenCanEdit: '✅ When you CAN edit:',
        eventDraftStatus: '• Event is in DRAFT status',
        noTicketsSold: '• No tickets sold yet',
        eventNotPublished: '• Event is not published',
        whenEditingLocked: '🔒 When editing is LOCKED:',
        eventIsPublished: '• Event is published',
        ticketsAlreadySold: '• Tickets have already been sold',
        eventStatusNotDraft: '• Event status is not DRAFT',
        safeToEdit: 'Safe to edit - no sales yet',
        lockedToPreserve: 'Locked to preserve sales data',
        ticketsSoldCount: '{count} ticket(s) already sold. Editing is locked to preserve purchase data.',
        cannotCreateTicketTypes: 'Cannot create new ticket types. {count} ticket(s) have already been sold.',
        salesDataIntegrity: 'Event is published. Cannot create ticket types to preserve sales data integrity.',

        // Publishing
        publishingOptions: 'Publishing Options',
        publishEventImmediately: 'Publish event immediately (make it visible to the public)',
        makeVisiblePublic: 'Make it visible to the public',
        publishUnpublishLater: 'You can always publish or unpublish your event later from the dashboard',
        currentlyPublished: 'Currently Published',
        currentlyUnpublished: 'Currently Unpublished',
        usePublishButtons: 'Use the publish/unpublish buttons in the events list to change this status',
        changePublishStatus: 'Change publish status',

        // Validation
        fixErrorsBelow: 'Please fix the errors below',
        formValidationError: 'Please fix form errors',
        requiredField: 'This field is required',
        invalidInput: 'Invalid input',

        // Success/Error Messages
        eventCreatedSuccessfully: 'Event and all ticket types created successfully!',
        eventUpdatedSuccessfully: 'Event updated successfully!',
        ticketTypeCreatedSuccessfully: 'Ticket type created successfully!',
        ticketTypeUpdatedSuccessfully: 'Ticket type updated successfully!',
        failedToCreateEvent: 'Failed to create event. Please try again.',
        failedToUpdateEvent: 'Failed to update event. Please try again.',
        failedToCreateTicketType: 'Failed to create ticket type',
        failedToUpdateTicketType: 'Failed to update ticket type',
        creatingEvent: 'Creating Event...',
        updatingEvent: 'Updating Event...',
        redirectingToDashboard: 'Redirecting to dashboard...',
        redirectingToEventDetail: 'Redirecting to event detail...',

        // Capacity and Venues
        capacity: 'Capacity',
        venue: 'Venue',
        selectAVenue: 'Select a venue',
        venueWithCapacity: '{name} - {city} (Capacity: {capacity})',

        // Categories
        category: 'Category',
        technology: 'Technology',
        business: 'Business',
        music: 'Music',
        sports: 'Sports',
        education: 'Education',

        // Event States
        published: 'Published',
        draft: 'Draft',
        online: 'Online',
        inPerson: 'In-Person',

        // Multi-day
        multiDaySchedule: 'Multi-day schedule',

        // Venue Management
        venues: 'Venues',
        createVenue: 'Create Venue',
        venueName: 'Venue Name',
        venueNameRequired: 'Venue name is required',
        enterVenueName: 'Enter venue name',
        venueAddress: 'Address',
        addressRequired: 'Address is required',
        enterVenueAddress: 'Enter venue address',
        venueState: 'State',
        enterState: 'Enter state',
        enterStateOptional: 'Enter state (optional)',
        venueCountry: 'Country',
        countryRequired: 'Country is required',
        enterCountry: 'Enter country',
        venueZipCode: 'ZIP Code',
        enterZipCode: 'Enter ZIP code',
        enterZipCodeOptional: 'Enter ZIP code (optional)',
        capacityRequired: 'Capacity must be greater than 0',
        maximumCapacity: 'Maximum capacity',
        contactEmail: 'Contact Email',
        contactPhone: 'Contact Phone',
        website: 'Website',
        latitude: 'Latitude',
        longitude: 'Longitude',
        description: 'Description',
        venueDescription: 'Venue Description',
        describeVenue: 'Describe the venue, amenities, special features...',
        venueImageUrl: 'Venue Image URL',
        validEmailRequired: 'Please enter a valid email address',
        latitudeBetween: 'Latitude must be between -90 and 90',
        longitudeBetween: 'Longitude must be between -180 and 180',
        optionalMapIntegration: 'Optional: For map integration',
        createNewVenue: 'Create New Venue',
        venueCreatedSuccessfully: 'Venue created successfully!',
        failedToCreateVenue: 'Failed to create venue. Please try again.',
        failedToFetchVenues: 'Failed to load venues',
        creatingVenue: 'Creating...',
        loadingVenues: 'Loading venues...',
        searchVenues: 'Search venues...',
        allCities: 'All Cities',
        noVenuesFound: 'No venues found',
        adjustFilters: 'Try adjusting your filters',
        getStartedFirstVenue: 'Get started by creating your first venue',
        venueLocation: 'Location',
        venueCapacity: 'Capacity',
        venueEvents: 'Events',
        venueStatus: 'Status',
        active: 'Active',
        inactive: 'Inactive',
        eventsCount: '{count} events',
        viewAvailableVenues: 'View available venues and create new ones',
        createNewOnes: 'Create new ones',

        // Ticket Management
        tickets: 'Tickets',
        ticketManagement: 'Ticket Management',
        manageTicketTypes: 'Manage ticket types, validate tickets, and handle check-ins',
        validateTickets: 'Validate Tickets',
        checkIn: 'Check-in',
        ticketValidation: 'Ticket Validation',
        ticketCheckIn: 'Ticket Check-in',
        ticketsAndCheckIn: 'Tickets & Check-in',

        // Ticket Types Management
        createTicketTypeAction: 'Create Ticket Type',
        ticketTypeLimitations: '⚠️ Important: Ticket Type Creation Limitations',
        publishedEventsRestriction: 'Published events: Ticket types cannot be modified to preserve existing sales data',
        eventsWithSalesRestriction: 'Events with sales: Ticket type editing is locked once tickets are sold',
        draftStatusRequired: 'For ticket type creation: Events must be in DRAFT status with no existing sales',
        alternativeCreateEvent: 'Alternative: Create a new event if you need different ticket types',
        onlyWorksForDraft: 'Only works for draft events with no existing sales',
        createNewEventLink: 'Create New Event',
        manageEventsLink: 'Manage Events',

        // Ticket Form
        selectAnEvent: 'Select an event',
        ticketCreationRequirements: '⚠️ Ticket Creation Requirements',
        eventMustBeDraft: 'Event must be in DRAFT status (not published)',
        noExistingTicketSales: 'Event must have no existing ticket sales',
        mustBeEventOrganizer: 'You must be the event organizer',
        editTicketsDuringCreation: 'If this fails, edit ticket types during event creation instead',
        ticketEvent: 'Event',
        eventRequired: 'Event is required',
        noEventsFound: 'No events found',
        needCreateEventFirst: 'You need to create an event first before creating ticket types.',

        // Ticket Types Display
        loadingTicketTypes: 'Loading ticket types...',
        noTicketTypesFound: 'No ticket types found',
        adjustFiltersOrCreate: 'Try adjusting your filters or create your first ticket type',
        createFirstTicketTypePrompt: 'Create your first ticket type',
        ticketType: 'Ticket Type',
        event: 'Event',
        availability: 'Availability',
        status: 'Status',
        remaining: 'remaining',

        // Validation Tab
        validateTicket: 'Validate Ticket',
        enterTicketNumber: 'Enter ticket number',
        validating: 'Validating...',
        validate: 'Validate',
        validTicket: 'Valid Ticket',
        invalidTicket: 'Invalid Ticket',
        ticketNumber: 'Ticket Number',
        attendeeName: 'Attendee',
        alreadyUsed: 'Already Used',
        notUsed: 'Not Used',

        // Check-in Tab
        checkInTicket: 'Check-in Ticket',
        enterTicketNumberCheckIn: 'Enter ticket number for check-in',
        checkingIn: 'Checking in...',
        ticketCheckedInSuccessfully: 'Ticket Checked In Successfully',

        // Ticket Warnings
        importantTicketLimitations: '⚠️ Important: Ticket Type Creation Limitations',
        cannotModifyPublished: '• Published events: Ticket types cannot be modified to preserve existing sales data',
        editingLockedAfterSales: '• Events with sales: Ticket type editing is locked once tickets are sold',
        draftStatusForCreation: '• For ticket type creation: Events must be in DRAFT status with no existing sales',
        createNewEventAlternative: '• Alternative: Create a new event if you need different ticket types',

        // Business Rules
        businessRulesWarning: '⚠️ Ticket Creation Requirements',

        // Ticket States
        ticketInactive: 'Inactive',

        // General UI
        optional: 'optional',
        required: 'required',

        // Appearance
        theme: 'Theme',
        lightMode: 'Light Mode',
        darkMode: 'Dark Mode',
        autoMode: 'Auto Mode',
        accentColor: 'Accent Color',
        fontSize: 'Font Size',
        compactMode: 'Compact Mode',

        // Time and Date
        timeFormat: 'Time Format',
        dateFormat: 'Date Format',
        currency: 'Currency',
        timezone: 'Timezone',

        // Messages
        saveSuccess: 'Settings saved successfully!',
        saveError: 'Failed to save settings',
        loadError: 'Failed to load data',

        // Dashboard specific
        welcomeBack: 'Welcome back, {name}!',
        virtualEvent: 'Virtual Event',
        viewAllEvents: 'View all events →',
        upcomingEvents: 'Upcoming Events',
        unpublish: 'Unpublish',
        unlimited: 'Unlimited',
        uncategorized: 'Uncategorized',
        totalRevenue: 'Total Revenue',
        totalEvents: 'Total Events',
        ticketsSold: 'Tickets Sold',
        revenue: 'Revenue',
        publish: 'Publish',
        noEventsYet: 'No events yet',
        maxCapacity: 'Max Capacity',
        loadingDashboard: 'Loading your dashboard...',
        dashboardError: 'Failed to load dashboard data',
        publishedCount: '{count} published'
    },

    // Spanish translations
    es: {
        // Common
        save: 'Guardar',
        cancel: 'Cancelar',
        delete: 'Eliminar',
        edit: 'Editar',
        view: 'Ver',
        loading: 'Cargando...',
        error: 'Error',
        success: 'Éxito',
        confirm: 'Confirmar',
        back: 'Atrás',
        create: 'Crear',
        update: 'Actualizar',

        // Navigation
        dashboard: 'Panel',
        events: 'Eventos',
        settings: 'Configuración',
        profile: 'Perfil',
        logout: 'Cerrar Sesión',

        // Settings
        personalInformation: 'Información Personal',
        organization: 'Organización',
        notifications: 'Notificaciones',
        security: 'Seguridad',
        appearance: 'Apariencia',
        language: 'Idioma',
        preferences: 'Preferencias',

        // Profile
        firstName: 'Nombre',
        lastName: 'Apellido',
        email: 'Correo Electrónico',
        phoneNumber: 'Número de Teléfono',
        companyName: 'Nombre de la Empresa',
        address: 'Dirección',
        city: 'Ciudad',
        state: 'Estado',
        zipCode: 'Código Postal',
        country: 'País',

        // Events
        createEvent: 'Crear Evento',
        editEvent: 'Editar Evento',
        eventTitle: 'Título del Evento',
        eventDescription: 'Descripción del Evento',
        eventDate: 'Fecha del Evento',
        eventTime: 'Hora del Evento',
        eventLocation: 'Ubicación del Evento',
        ticketPrice: 'Precio del Boleto',
        yourEvents: 'Tus Eventos',
        createYourFirstEvent: 'Crear Tu Primer Evento',
        createFirstEventPrompt: 'Crea tu primer evento para comenzar con EventPro.',
        eventsSubtitle: 'Gestiona tus eventos y rastrea su rendimiento',
        allEvents: 'Todos los Eventos',
        unpublished: 'No Publicado',
        searchEvents: 'Buscar eventos...',
        noDescriptionAvailable: 'Sin descripción disponible',
        dateNotSet: 'Fecha no establecida',
        invalidDate: 'Fecha inválida',
        timeNotSet: 'Hora no establecida',
        invalidTime: 'Hora inválida',
        confirmDeleteEvent: '¿Estás seguro de que quieres eliminar "{title}"? Esta acción no se puede deshacer.',
        failedToDeleteEvent: 'Error al eliminar evento',
        failedToTogglePublish: 'Error al {action} evento',
        noEventsMatchSearch: 'Ningún evento coincide con tu búsqueda',
        adjustSearchCriteria: 'Intenta ajustar tus criterios de búsqueda o filtro',

        // Event Form
        createNewEvent: 'Crear Nuevo Evento',
        editEventDetails: 'Editar Evento',
        fillEventDetails: 'Completa los detalles para crear tu evento',
        updateEventDetails: 'Actualiza los detalles de tu evento',
        basicInformation: 'Información Básica',
        eventTitleRequired: 'El título del evento es obligatorio',
        enterEventTitle: 'Ingresa el título del evento',
        descriptionRequired: 'La descripción del evento es obligatoria',
        describeEventDetail: 'Describe tu evento en detalle...',
        categoryRequired: 'La categoría es obligatoria',
        selectCategory: 'Seleccionar categoría',
        maxCapacityRequired: 'La capacidad máxima debe ser mayor a 0',
        maximumAttendees: 'Máximo de asistentes',
        eventImageUrl: 'URL de Imagen del Evento',
        enterImageUrl: 'https://ejemplo.com/imagen-evento.jpg',

        // Date & Time
        dateTime: 'Fecha y Hora',
        multiDayEvent: 'Evento de múltiples días: {count} días',
        dayEvent: 'Evento de {count} día',
        startDateTime: 'Fecha y Hora de Inicio',
        startDateTimeRequired: 'La fecha de inicio del evento es obligatoria',
        endDateTime: 'Fecha y Hora de Fin',
        leaveEmptySingleSession: 'Deja vacío para eventos de una sola sesión',
        endDateAfterStart: 'La fecha de fin debe ser posterior a la fecha de inicio',
        registrationDeadline: 'Fecha Límite de Registro',
        whenRegistrationClose: '¿Cuándo debe cerrarse el registro? (opcional)',
        registrationDeadlineBeforeEvent: 'La fecha límite de registro debe ser antes del inicio del evento',

        // Location
        location: 'Ubicación',
        onlineEvent: 'Este es un evento en línea',
        venueRequired: 'Se requiere un lugar para eventos presenciales',
        selectVenue: 'Seleccionar lugar',
        locationDetails: 'Detalles de Ubicación',
        meetingLinkPlatform: 'Enlace de reunión o detalles de plataforma',
        additionalLocationInfo: 'Información adicional de ubicación',

        // Ticket Types
        ticketTypes: 'Tipos de Boletos',
        addTicketType: 'Agregar Tipo de Boleto',
        ticketTypesCount: 'Tipos de Boletos',
        totalTypes: 'Tipos Totales',
        editable: 'Editable',
        locked: 'Bloqueado',
        noTicketTypesYet: 'Aún no hay tipos de boletos',
        addTicketTypesToStart: 'Agrega tipos de boletos para comenzar a vender boletos para tu evento',
        createFirstTicketType: 'Crear Primer Tipo de Boleto',
        ticketTypeName: 'Nombre del Boleto',
        ticketTypeNameRequired: 'El nombre del boleto es obligatorio',
        ticketDescription: 'Descripción',
        optionalTicketDescription: 'Descripción opcional para este tipo de boleto',
        price: 'Precio (RM)',
        priceRequired: 'Se requiere un precio válido',
        quantity: 'Cantidad',
        quantityRequired: 'La cantidad de boletos debe ser mayor a 0',
        quantityGreaterThanZero: 'La cantidad debe ser mayor a 0',
        ticketActive: 'Activo (disponible para compra)',
        availableForPurchase: 'Disponible para compra',
        createTicketType: 'Crear Tipo de Boleto',
        updateTicketType: 'Actualizar Tipo de Boleto',
        editTicketType: 'Editar Tipo de Boleto',

        // Smart Editing
        smartTicketEditing: '💡 Edición Inteligente de Tipos de Boleto',
        whenCanEdit: '✅ Cuándo PUEDES editar:',
        eventDraftStatus: '• El evento está en estado BORRADOR',
        noTicketsSold: '• No se han vendido boletos aún',
        eventNotPublished: '• El evento no está publicado',
        whenEditingLocked: '🔒 Cuándo la edición está BLOQUEADA:',
        eventIsPublished: '• El evento está publicado',
        ticketsAlreadySold: '• Ya se han vendido boletos',
        eventStatusNotDraft: '• El estado del evento no es BORRADOR',
        safeToEdit: 'Seguro para editar - sin ventas aún',
        lockedToPreserve: 'Bloqueado para preservar datos de ventas',
        ticketsSoldCount: '{count} boleto(s) ya vendidos. La edición está bloqueada para preservar datos de compra.',
        cannotCreateTicketTypes: 'No se pueden crear nuevos tipos de boletos. {count} boleto(s) ya han sido vendidos.',
        salesDataIntegrity: 'El evento está publicado. No se pueden crear tipos de boletos para preservar la integridad de los datos de ventas.',

        // Publishing
        publishingOptions: 'Opciones de Publicación',
        publishEventImmediately: 'Publicar evento inmediatamente (hacerlo visible al público)',
        makeVisiblePublic: 'Hacerlo visible al público',
        publishUnpublishLater: 'Siempre puedes publicar o despublicar tu evento más tarde desde el panel',
        currentlyPublished: 'Actualmente Publicado',
        currentlyUnpublished: 'Actualmente No Publicado',
        usePublishButtons: 'Usa los botones de publicar/despublicar en la lista de eventos para cambiar este estado',
        changePublishStatus: 'Cambiar estado de publicación',

        // Validation
        fixErrorsBelow: 'Por favor corrige los errores a continuación',
        formValidationError: 'Por favor corrige los errores del formulario',
        requiredField: 'Este campo es obligatorio',
        invalidInput: 'Entrada inválida',

        // Success/Error Messages
        eventCreatedSuccessfully: '¡Evento y todos los tipos de boletos creados exitosamente!',
        eventUpdatedSuccessfully: '¡Evento actualizado exitosamente!',
        ticketTypeCreatedSuccessfully: '¡Tipo de boleto creado exitosamente!',
        ticketTypeUpdatedSuccessfully: '¡Tipo de boleto actualizado exitosamente!',
        failedToCreateEvent: 'Error al crear evento. Por favor intenta de nuevo.',
        failedToUpdateEvent: 'Error al actualizar evento. Por favor intenta de nuevo.',
        failedToCreateTicketType: 'Error al crear tipo de boleto',
        failedToUpdateTicketType: 'Error al actualizar tipo de boleto',
        creatingEvent: 'Creando Evento...',
        updatingEvent: 'Actualizando Evento...',
        redirectingToDashboard: 'Redirigiendo al panel...',
        redirectingToEventDetail: 'Redirigiendo a detalles del evento...',

        // Capacity and Venues
        capacity: 'Capacidad',
        venue: 'Lugar',
        selectAVenue: 'Selecciona un lugar',
        venueWithCapacity: '{name} - {city} (Capacidad: {capacity})',

        // Categories
        category: 'Categoría',
        technology: 'Tecnología',
        business: 'Negocios',
        music: 'Música',
        sports: 'Deportes',
        education: 'Educación',

        // Event States
        published: 'Publicado',
        draft: 'Borrador',
        online: 'En línea',
        inPerson: 'Presencial',

        // Multi-day
        multiDaySchedule: 'Horario de múltiples días',

        // Venue Management
        venues: 'Lugares',
        createVenue: 'Crear Lugar',
        venueName: 'Nombre del Lugar',
        venueNameRequired: 'El nombre del lugar es obligatorio',
        enterVenueName: 'Ingresa el nombre del lugar',
        venueAddress: 'Dirección',
        addressRequired: 'La dirección es obligatoria',
        enterVenueAddress: 'Ingresa la dirección del lugar',
        venueState: 'Estado',
        enterState: 'Ingresa el estado',
        enterStateOptional: 'Ingresa el estado (opcional)',
        venueCountry: 'País',
        countryRequired: 'El país es obligatorio',
        enterCountry: 'Ingresa el país',
        venueZipCode: 'Código Postal',
        enterZipCode: 'Ingresa el código postal',
        enterZipCodeOptional: 'Ingresa el código postal (opcional)',
        capacityRequired: 'La capacidad debe ser mayor a 0',
        maximumCapacity: 'Capacidad máxima',
        contactEmail: 'Email de Contacto',
        contactPhone: 'Teléfono de Contacto',
        website: 'Sitio Web',
        latitude: 'Latitud',
        longitude: 'Longitud',
        description: 'Descripción',
        venueDescription: 'Descripción del Lugar',
        describeVenue: 'Describe el lugar, amenidades, características especiales...',
        venueImageUrl: 'URL de Imagen del Lugar',
        validEmailRequired: 'Por favor ingresa una dirección de email válida',
        latitudeBetween: 'La latitud debe estar entre -90 y 90',
        longitudeBetween: 'La longitud debe estar entre -180 y 180',
        optionalMapIntegration: 'Opcional: Para integración con mapas',
        createNewVenue: 'Crear Nuevo Lugar',
        venueCreatedSuccessfully: '¡Lugar creado exitosamente!',
        failedToCreateVenue: 'Error al crear lugar. Por favor intenta de nuevo.',
        failedToFetchVenues: 'Error al cargar lugares',
        creatingVenue: 'Creando...',
        loadingVenues: 'Cargando lugares...',
        searchVenues: 'Buscar lugares...',
        allCities: 'Todas las Ciudades',
        noVenuesFound: 'No se encontraron lugares',
        adjustFilters: 'Intenta ajustar tus filtros',
        getStartedFirstVenue: 'Comienza creando tu primer lugar',
        venueLocation: 'Ubicación',
        venueCapacity: 'Capacidad',
        venueEvents: 'Eventos',
        venueStatus: 'Estado',
        active: 'Activo',
        inactive: 'Inactivo',
        eventsCount: '{count} eventos',
        viewAvailableVenues: 'Ver lugares disponibles y crear nuevos',
        createNewOnes: 'Crear nuevos',

        // Ticket Management
        tickets: 'Boletos',
        ticketManagement: 'Gestión de Boletos',
        manageTicketTypes: 'Gestiona tipos de boletos, valida boletos y maneja check-ins',
        validateTickets: 'Validar Boletos',
        checkIn: 'Check-in',
        ticketValidation: 'Validación de Boletos',
        ticketCheckIn: 'Check-in de Boletos',
        ticketsAndCheckIn: 'Boletos y Check-in',

        // Ticket Types Management
        createTicketTypeAction: 'Crear Tipo de Boleto',
        ticketTypeLimitations: '⚠️ Importante: Limitaciones de Creación de Tipos de Boleto',
        publishedEventsRestriction: 'Eventos publicados: Los tipos de boletos no se pueden modificar para preservar los datos de ventas existentes',
        eventsWithSalesRestriction: 'Eventos con ventas: La edición de tipos de boletos se bloquea una vez que se venden boletos',
        draftStatusRequired: 'Para crear tipos de boletos: Los eventos deben estar en estado BORRADOR sin ventas existentes',
        alternativeCreateEvent: 'Alternativa: Crear un nuevo evento si necesitas diferentes tipos de boletos',
        onlyWorksForDraft: 'Solo funciona para eventos en borrador sin ventas existentes',
        createNewEventLink: 'Crear Nuevo Evento',
        manageEventsLink: 'Gestionar Eventos',

        // Ticket Form
        selectAnEvent: 'Seleccionar un evento',
        ticketCreationRequirements: '⚠️ Requisitos de Creación de Boletos',
        eventMustBeDraft: 'El evento debe estar en estado BORRADOR (no publicado)',
        noExistingTicketSales: 'El evento no debe tener ventas de boletos existentes',
        mustBeEventOrganizer: 'Debes ser el organizador del evento',
        editTicketsDuringCreation: 'Si esto falla, edita los tipos de boletos durante la creación del evento',
        ticketEvent: 'Evento',
        eventRequired: 'El evento es obligatorio',
        noEventsFound: 'No se encontraron eventos',
        needCreateEventFirst: 'Necesitas crear un evento primero antes de crear tipos de boletos.',

        // Ticket Types Display
        loadingTicketTypes: 'Cargando tipos de boletos...',
        noTicketTypesFound: 'No se encontraron tipos de boletos',
        adjustFiltersOrCreate: 'Intenta ajustar tus filtros o crear tu primer tipo de boleto',
        createFirstTicketTypePrompt: 'Crear tu primer tipo de boleto',
        ticketType: 'Tipo de Boleto',
        event: 'Evento',
        availability: 'Disponibilidad',
        status: 'Estado',
        remaining: 'restantes',

        // Validation Tab
        validateTicket: 'Validar Boleto',
        enterTicketNumber: 'Ingresa el número de boleto',
        validating: 'Validando...',
        validate: 'Validar',
        validTicket: 'Boleto Válido',
        invalidTicket: 'Boleto Inválido',
        ticketNumber: 'Número de Boleto',
        attendeeName: 'Asistente',
        alreadyUsed: 'Ya Usado',
        notUsed: 'No Usado',

        // Check-in Tab
        checkInTicket: 'Check-in de Boleto',
        enterTicketNumberCheckIn: 'Ingresa el número de boleto para check-in',
        checkingIn: 'Haciendo check-in...',
        ticketCheckedInSuccessfully: 'Check-in de Boleto Exitoso',

        // Ticket Warnings
        importantTicketLimitations: '⚠️ Importante: Limitaciones de Creación de Tipos de Boleto',
        cannotModifyPublished: '• Eventos publicados: Los tipos de boletos no se pueden modificar para preservar los datos de ventas existentes',
        editingLockedAfterSales: '• Eventos con ventas: La edición de tipos de boletos se bloquea una vez que se venden boletos',
        draftStatusForCreation: '• Para crear tipos de boletos: Los eventos deben estar en estado BORRADOR sin ventas existentes',
        createNewEventAlternative: '• Alternativa: Crear un nuevo evento si necesitas diferentes tipos de boletos',

        // Business Rules
        businessRulesWarning: '⚠️ Requisitos de Creación de Boletos',

        // Ticket States
        ticketInactive: 'Inactivo',

        // General UI
        optional: 'opcional',
        required: 'obligatorio',

        // Appearance
        theme: 'Tema',
        lightMode: 'Modo Claro',
        darkMode: 'Modo Oscuro',
        autoMode: 'Modo Automático',
        accentColor: 'Color de Acento',
        fontSize: 'Tamaño de Fuente',
        compactMode: 'Modo Compacto',

        // Time and Date
        timeFormat: 'Formato de Hora',
        dateFormat: 'Formato de Fecha',
        currency: 'Moneda',
        timezone: 'Zona Horaria',

        // Messages
        saveSuccess: '¡Configuración guardada exitosamente!',
        saveError: 'Error al guardar la configuración',
        loadError: 'Error al cargar los datos',

        // Dashboard specific
        welcomeBack: '¡Bienvenido de vuelta, {name}!',
        virtualEvent: 'Evento Virtual',
        viewAllEvents: 'Ver todos los eventos →',
        upcomingEvents: 'Próximos Eventos',
        unpublish: 'Despublicar',
        unlimited: 'Ilimitado',
        uncategorized: 'Sin categoría',
        totalRevenue: 'Ingresos Totales',
        totalEvents: 'Total de Eventos',
        ticketsSold: 'Boletos Vendidos',
        revenue: 'Ingresos',
        publish: 'Publicar',
        noEventsYet: 'Aún no hay eventos',
        maxCapacity: 'Capacidad Máxima',
        loadingDashboard: 'Cargando tu panel...',
        dashboardError: 'Error al cargar los datos del panel',
        publishedCount: '{count} publicados'
    },

    // French translations
    fr: {
        // Common
        save: 'Enregistrer',
        cancel: 'Annuler',
        delete: 'Supprimer',
        edit: 'Modifier',
        view: 'Voir',
        loading: 'Chargement...',
        error: 'Erreur',
        success: 'Succès',
        confirm: 'Confirmer',
        back: 'Retour',
        create: 'Créer',
        update: 'Mettre à jour',

        // Navigation
        dashboard: 'Tableau de bord',
        events: 'Événements',
        settings: 'Paramètres',
        profile: 'Profil',
        logout: 'Déconnexion',

        // Settings
        personalInformation: 'Informations personnelles',
        organization: 'Organisation',
        notifications: 'Notifications',
        security: 'Sécurité',
        appearance: 'Apparence',
        language: 'Langue',
        preferences: 'Préférences',

        // Profile
        firstName: 'Prénom',
        lastName: 'Nom de famille',
        email: 'Email',
        phoneNumber: 'Numéro de téléphone',
        companyName: 'Nom de l\'entreprise',
        address: 'Adresse',
        city: 'Ville',
        state: 'État',
        zipCode: 'Code postal',
        country: 'Pays',

        // Events
        createEvent: 'Créer un événement',
        editEvent: 'Modifier l\'événement',
        eventTitle: 'Titre de l\'événement',
        eventDescription: 'Description de l\'événement',
        eventDate: 'Date de l\'événement',
        eventTime: 'Heure de l\'événement',
        eventLocation: 'Lieu de l\'événement',
        ticketPrice: 'Prix du billet',
        yourEvents: 'Vos événements',
        createYourFirstEvent: 'Créer votre premier événement',
        createFirstEventPrompt: 'Créez votre premier événement pour commencer avec EventPro.',
        eventsSubtitle: 'Gérez vos événements et suivez leurs performances',
        allEvents: 'Tous les événements',
        unpublished: 'Non publié',
        searchEvents: 'Rechercher des événements...',
        noDescriptionAvailable: 'Aucune description disponible',
        dateNotSet: 'Date non définie',
        invalidDate: 'Date invalide',
        timeNotSet: 'Heure non définie',
        invalidTime: 'Heure invalide',
        confirmDeleteEvent: 'Êtes-vous sûr de vouloir supprimer "{title}" ? Cette action ne peut pas être annulée.',
        failedToDeleteEvent: 'Échec de la suppression de l\'événement',
        failedToTogglePublish: 'Échec de {action} l\'événement',
        noEventsMatchSearch: 'Aucun événement ne correspond à votre recherche',
        adjustSearchCriteria: 'Essayez d\'ajuster vos critères de recherche ou de filtre',

        // Event Form
        createNewEvent: 'Créer un nouvel événement',
        editEventDetails: 'Modifier l\'événement',
        fillEventDetails: 'Remplissez les détails pour créer votre événement',
        updateEventDetails: 'Mettez à jour les détails de votre événement',
        basicInformation: 'Informations de base',
        eventTitleRequired: 'Le titre de l\'événement est requis',
        enterEventTitle: 'Entrez le titre de l\'événement',
        descriptionRequired: 'La description de l\'événement est requise',
        describeEventDetail: 'Décrivez votre événement en détail...',
        categoryRequired: 'La catégorie est requise',
        selectCategory: 'Sélectionner une catégorie',
        maxCapacityRequired: 'La capacité maximale doit être supérieure à 0',
        maximumAttendees: 'Nombre maximum de participants',
        eventImageUrl: 'URL de l\'image de l\'événement',
        enterImageUrl: 'https://exemple.com/image-evenement.jpg',

        // Date & Time
        dateTime: 'Date et heure',
        multiDayEvent: 'Événement de plusieurs jours: {count} jours',
        dayEvent: 'Événement de {count} jour',
        startDateTime: 'Date et heure de début',
        startDateTimeRequired: 'La date de début de l\'événement est requise',
        endDateTime: 'Date et heure de fin',
        leaveEmptySingleSession: 'Laissez vide pour les événements d\'une seule session',
        endDateAfterStart: 'La date de fin doit être postérieure à la date de début',
        registrationDeadline: 'Date limite d\'inscription',
        whenRegistrationClose: 'Quand l\'inscription doit-elle se fermer ? (optionnel)',
        registrationDeadlineBeforeEvent: 'La date limite d\'inscription doit être avant le début de l\'événement',

        // Location
        location: 'Lieu',
        onlineEvent: 'Ceci est un événement en ligne',
        venueRequired: 'Un lieu est requis pour les événements en personne',
        selectVenue: 'Sélectionner un lieu',
        locationDetails: 'Détails du lieu',
        meetingLinkPlatform: 'Lien de réunion ou détails de la plateforme',
        additionalLocationInfo: 'Informations supplémentaires sur le lieu',

        // Ticket Types
        ticketTypes: 'Types de billets',
        addTicketType: 'Ajouter un type de billet',
        ticketTypesCount: 'Types de billets',
        totalTypes: 'Types totaux',
        editable: 'Modifiable',
        locked: 'Verrouillé',
        noTicketTypesYet: 'Aucun type de billet pour le moment',
        addTicketTypesToStart: 'Ajoutez des types de billets pour commencer à vendre des billets pour votre événement',
        createFirstTicketType: 'Créer le premier type de billet',
        ticketTypeName: 'Nom du billet',
        ticketTypeNameRequired: 'Le nom du billet est requis',
        ticketDescription: 'Description',
        optionalTicketDescription: 'Description optionnelle pour ce type de billet',
        price: 'Prix (RM)',
        priceRequired: 'Un prix valide est requis',
        quantity: 'Quantité',
        quantityRequired: 'La quantité de billets doit être supérieure à 0',
        quantityGreaterThanZero: 'La quantité doit être supérieure à 0',
        ticketActive: 'Actif (disponible à l\'achat)',
        availableForPurchase: 'Disponible à l\'achat',
        createTicketType: 'Créer un type de billet',
        updateTicketType: 'Mettre à jour le type de billet',
        editTicketType: 'Modifier le type de billet',

        // Smart Editing
        smartTicketEditing: '💡 Édition intelligente des types de billets',
        whenCanEdit: '✅ Quand vous POUVEZ modifier:',
        eventDraftStatus: '• L\'événement est en statut BROUILLON',
        noTicketsSold: '• Aucun billet vendu encore',
        eventNotPublished: '• L\'événement n\'est pas publié',
        whenEditingLocked: '🔒 Quand l\'édition est VERROUILLÉE:',
        eventIsPublished: '• L\'événement est publié',
        ticketsAlreadySold: '• Des billets ont déjà été vendus',
        eventStatusNotDraft: '• Le statut de l\'événement n\'est pas BROUILLON',
        safeToEdit: 'Sûr à modifier - aucune vente encore',
        lockedToPreserve: 'Verrouillé pour préserver les données de ventes',
        ticketsSoldCount: '{count} billet(s) déjà vendu(s). L\'édition est verrouillée pour préserver les données d\'achat.',
        cannotCreateTicketTypes: 'Impossible de créer de nouveaux types de billets. {count} billet(s) ont déjà été vendus.',
        salesDataIntegrity: 'L\'événement est publié. Impossible de créer des types de billets pour préserver l\'intégrité des données de ventes.',

        // Publishing
        publishingOptions: 'Options de publication',
        publishEventImmediately: 'Publier l\'événement immédiatement (le rendre visible au public)',
        makeVisiblePublic: 'Le rendre visible au public',
        publishUnpublishLater: 'Vous pouvez toujours publier ou dépublier votre événement plus tard depuis le tableau de bord',
        currentlyPublished: 'Actuellement publié',
        currentlyUnpublished: 'Actuellement non publié',
        usePublishButtons: 'Utilisez les boutons publier/dépublier dans la liste des événements pour changer ce statut',
        changePublishStatus: 'Changer le statut de publication',

        // Validation
        fixErrorsBelow: 'Veuillez corriger les erreurs ci-dessous',
        formValidationError: 'Veuillez corriger les erreurs du formulaire',
        requiredField: 'Ce champ est requis',
        invalidInput: 'Entrée invalide',

        // Success/Error Messages
        eventCreatedSuccessfully: 'Événement et tous les types de billets créés avec succès !',
        eventUpdatedSuccessfully: 'Événement mis à jour avec succès !',
        ticketTypeCreatedSuccessfully: 'Type de billet créé avec succès !',
        ticketTypeUpdatedSuccessfully: 'Type de billet mis à jour avec succès !',
        failedToCreateEvent: 'Échec de la création de l\'événement. Veuillez réessayer.',
        failedToUpdateEvent: 'Échec de la mise à jour de l\'événement. Veuillez réessayer.',
        failedToCreateTicketType: 'Échec de la création du type de billet',
        failedToUpdateTicketType: 'Échec de la mise à jour du type de billet',
        creatingEvent: 'Création de l\'événement...',
        updatingEvent: 'Mise à jour de l\'événement...',
        redirectingToDashboard: 'Redirection vers le tableau de bord...',
        redirectingToEventDetail: 'Redirection vers les détails de l\'événement...',

        // Capacity and Venues
        capacity: 'Capacité',
        venue: 'Lieu',
        selectAVenue: 'Sélectionner un lieu',
        venueWithCapacity: '{name} - {city} (Capacité: {capacity})',

        // Categories
        category: 'Catégorie',
        technology: 'Technologie',
        business: 'Affaires',
        music: 'Musique',
        sports: 'Sports',
        education: 'Éducation',

        // Event States
        published: 'Publié',
        draft: 'Brouillon',
        online: 'En ligne',
        inPerson: 'En personne',

        // Multi-day
        multiDaySchedule: 'Programme de plusieurs jours',

        // Venue Management
        venues: 'Lieux',
        createVenue: 'Créer un lieu',
        venueName: 'Nom du lieu',
        venueNameRequired: 'Le nom du lieu est requis',
        enterVenueName: 'Entrez le nom du lieu',
        venueAddress: 'Adresse',
        addressRequired: 'L\'adresse est requise',
        enterVenueAddress: 'Entrez l\'adresse du lieu',
        venueState: 'État',
        enterState: 'Entrez l\'état',
        enterStateOptional: 'Entrez l\'état (optionnel)',
        venueCountry: 'Pays',
        countryRequired: 'Le pays est requis',
        enterCountry: 'Entrez le pays',
        venueZipCode: 'Code postal',
        enterZipCode: 'Entrez le code postal',
        enterZipCodeOptional: 'Entrez le code postal (optionnel)',
        capacityRequired: 'La capacité doit être supérieure à 0',
        maximumCapacity: 'Capacité maximale',
        contactEmail: 'Email de contact',
        contactPhone: 'Téléphone de contact',
        website: 'Site web',
        latitude: 'Latitude',
        longitude: 'Longitude',
        description: 'Description',
        venueDescription: 'Description du lieu',
        describeVenue: 'Décrivez le lieu, les commodités, les caractéristiques spéciales...',
        venueImageUrl: 'URL de l\'image du lieu',
        validEmailRequired: 'Veuillez entrer une adresse email valide',
        latitudeBetween: 'La latitude doit être entre -90 et 90',
        longitudeBetween: 'La longitude doit être entre -180 et 180',
        optionalMapIntegration: 'Optionnel: Pour l\'intégration de cartes',
        createNewVenue: 'Créer un nouveau lieu',
        venueCreatedSuccessfully: 'Lieu créé avec succès !',
        failedToCreateVenue: 'Échec de la création du lieu. Veuillez réessayer.',
        failedToFetchVenues: 'Échec du chargement des lieux',
        creatingVenue: 'Création...',
        loadingVenues: 'Chargement des lieux...',
        searchVenues: 'Rechercher des lieux...',
        allCities: 'Toutes les villes',
        noVenuesFound: 'Aucun lieu trouvé',
        adjustFilters: 'Essayez d\'ajuster vos filtres',
        getStartedFirstVenue: 'Commencez en créant votre premier lieu',
        venueLocation: 'Lieu',
        venueCapacity: 'Capacité',
        venueEvents: 'Événements',
        venueStatus: 'Statut',
        active: 'Actif',
        inactive: 'Inactif',
        eventsCount: '{count} événements',
        viewAvailableVenues: 'Voir les lieux disponibles et en créer de nouveaux',
        createNewOnes: 'Créer de nouveaux',

        // Ticket Management
        tickets: 'Billets',
        ticketManagement: 'Gestion des billets',
        manageTicketTypes: 'Gérez les types de billets, validez les billets et gérez les enregistrements',
        validateTickets: 'Valider les billets',
        checkIn: 'Enregistrement',
        ticketValidation: 'Validation des billets',
        ticketCheckIn: 'Enregistrement des billets',
        ticketsAndCheckIn: 'Billets et enregistrement',

        // Ticket Types Management
        createTicketTypeAction: 'Créer un type de billet',
        ticketTypeLimitations: '⚠️ Important: Limitations de création de types de billets',
        publishedEventsRestriction: 'Événements publiés: Les types de billets ne peuvent pas être modifiés pour préserver les données de ventes existantes',
        eventsWithSalesRestriction: 'Événements avec ventes: L\'édition des types de billets est verrouillée une fois que les billets sont vendus',
        draftStatusRequired: 'Pour la création de types de billets: Les événements doivent être en statut BROUILLON sans ventes existantes',
        alternativeCreateEvent: 'Alternative: Créer un nouvel événement si vous avez besoin de différents types de billets',
        onlyWorksForDraft: 'Ne fonctionne que pour les événements en brouillon sans ventes existantes',
        createNewEventLink: 'Créer un nouvel événement',
        manageEventsLink: 'Gérer les événements',

        // Ticket Form
        selectAnEvent: 'Sélectionner un événement',
        ticketCreationRequirements: '⚠️ Exigences de création de billets',
        eventMustBeDraft: 'L\'événement doit être en statut BROUILLON (non publié)',
        noExistingTicketSales: 'L\'événement ne doit pas avoir de ventes de billets existantes',
        mustBeEventOrganizer: 'Vous devez être l\'organisateur de l\'événement',
        editTicketsDuringCreation: 'Si cela échoue, modifiez les types de billets pendant la création de l\'événement',
        ticketEvent: 'Événement',
        eventRequired: 'L\'événement est requis',
        noEventsFound: 'Aucun événement trouvé',
        needCreateEventFirst: 'Vous devez créer un événement d\'abord avant de créer des types de billets.',

        // Ticket Types Display
        loadingTicketTypes: 'Chargement des types de billets...',
        noTicketTypesFound: 'Aucun type de billet trouvé',
        adjustFiltersOrCreate: 'Essayez d\'ajuster vos filtres ou créez votre premier type de billet',
        createFirstTicketTypePrompt: 'Créer votre premier type de billet',
        ticketType: 'Type de billet',
        event: 'Événement',
        availability: 'Disponibilité',
        status: 'Statut',
        remaining: 'restants',

        // Validation Tab
        validateTicket: 'Valider le billet',
        enterTicketNumber: 'Entrez le numéro de billet',
        validating: 'Validation...',
        validate: 'Valider',
        validTicket: 'Billet valide',
        invalidTicket: 'Billet invalide',
        ticketNumber: 'Numéro de billet',
        attendeeName: 'Participant',
        alreadyUsed: 'Déjà utilisé',
        notUsed: 'Non utilisé',

        // Check-in Tab
        checkInTicket: 'Enregistrement de billet',
        enterTicketNumberCheckIn: 'Entrez le numéro de billet pour l\'enregistrement',
        checkingIn: 'Enregistrement...',
        ticketCheckedInSuccessfully: 'Billet enregistré avec succès',

        // Ticket Warnings
        importantTicketLimitations: '⚠️ Important: Limitations de création de types de billets',
        cannotModifyPublished: '• Événements publiés: Les types de billets ne peuvent pas être modifiés pour préserver les données de ventes existantes',
        editingLockedAfterSales: '• Événements avec ventes: L\'édition des types de billets est verrouillée une fois que les billets sont vendus',
        draftStatusForCreation: '• Pour la création de types de billets: Les événements doivent être en statut BROUILLON sans ventes existantes',
        createNewEventAlternative: '• Alternative: Créer un nouvel événement si vous avez besoin de différents types de billets',

        // Business Rules
        businessRulesWarning: '⚠️ Exigences de création de billets',

        // Ticket States
        ticketInactive: 'Inactif',

        // General UI
        optional: 'optionnel',
        required: 'requis',

        // Appearance
        theme: 'Thème',
        lightMode: 'Mode clair',
        darkMode: 'Mode sombre',
        autoMode: 'Mode automatique',
        accentColor: 'Couleur d\'accent',
        fontSize: 'Taille de police',
        compactMode: 'Mode compact',

        // Time and Date
        timeFormat: 'Format d\'heure',
        dateFormat: 'Format de date',
        currency: 'Devise',
        timezone: 'Fuseau horaire',

        // Messages
        saveSuccess: 'Paramètres sauvegardés avec succès !',
        saveError: 'Échec de la sauvegarde des paramètres',
        loadError: 'Échec du chargement des données',

        // Dashboard specific
        welcomeBack: 'Bon retour, {name} !',
        virtualEvent: 'Événement virtuel',
        viewAllEvents: 'Voir tous les événements →',
        upcomingEvents: 'Événements à venir',
        unpublish: 'Dépublier',
        unlimited: 'Illimité',
        uncategorized: 'Non catégorisé',
        totalRevenue: 'Revenus totaux',
        totalEvents: 'Total des événements',
        ticketsSold: 'Billets vendus',
        revenue: 'Revenus',
        publish: 'Publier',
        noEventsYet: 'Aucun événement encore',
        maxCapacity: 'Capacité maximale',
        loadingDashboard: 'Chargement de votre tableau de bord...',
        dashboardError: 'Échec du chargement des données du tableau de bord',
        publishedCount: '{count} publiés'
    },

    // German translations
    de: {
        // Common
        save: 'Speichern',
        cancel: 'Abbrechen',
        delete: 'Löschen',
        edit: 'Bearbeiten',
        view: 'Anzeigen',
        loading: 'Laden...',
        error: 'Fehler',
        success: 'Erfolg',
        confirm: 'Bestätigen',
        back: 'Zurück',
        create: 'Erstellen',
        update: 'Aktualisieren',

        // Navigation
        dashboard: 'Dashboard',
        events: 'Veranstaltungen',
        settings: 'Einstellungen',
        profile: 'Profil',
        logout: 'Abmelden',

        // Settings
        personalInformation: 'Persönliche Informationen',
        organization: 'Organisation',
        notifications: 'Benachrichtigungen',
        security: 'Sicherheit',
        appearance: 'Erscheinungsbild',
        language: 'Sprache',
        preferences: 'Einstellungen',

        // Profile
        firstName: 'Vorname',
        lastName: 'Nachname',
        email: 'E-Mail',
        phoneNumber: 'Telefonnummer',
        companyName: 'Firmenname',
        address: 'Adresse',
        city: 'Stadt',
        state: 'Bundesland',
        zipCode: 'Postleitzahl',
        country: 'Land',

        // Events
        createEvent: 'Veranstaltung erstellen',
        editEvent: 'Veranstaltung bearbeiten',
        eventTitle: 'Veranstaltungstitel',
        eventDescription: 'Veranstaltungsbeschreibung',
        eventDate: 'Veranstaltungsdatum',
        eventTime: 'Veranstaltungszeit',
        eventLocation: 'Veranstaltungsort',
        ticketPrice: 'Ticketpreis',
        yourEvents: 'Ihre Veranstaltungen',
        createYourFirstEvent: 'Erstellen Sie Ihre erste Veranstaltung',
        createFirstEventPrompt: 'Erstellen Sie Ihre erste Veranstaltung, um mit EventPro zu beginnen.',
        eventsSubtitle: 'Verwalten Sie Ihre Veranstaltungen und verfolgen Sie ihre Leistung',
        allEvents: 'Alle Veranstaltungen',
        unpublished: 'Unveröffentlicht',
        searchEvents: 'Veranstaltungen suchen...',
        noDescriptionAvailable: 'Keine Beschreibung verfügbar',
        dateNotSet: 'Datum nicht festgelegt',
        invalidDate: 'Ungültiges Datum',
        timeNotSet: 'Zeit nicht festgelegt',
        invalidTime: 'Ungültige Zeit',
        confirmDeleteEvent: 'Sind Sie sicher, dass Sie "{title}" löschen möchten? Diese Aktion kann nicht rückgängig gemacht werden.',
        failedToDeleteEvent: 'Fehler beim Löschen der Veranstaltung',
        failedToTogglePublish: 'Fehler beim {action} der Veranstaltung',
        noEventsMatchSearch: 'Keine Veranstaltungen entsprechen Ihrer Suche',
        adjustSearchCriteria: 'Versuchen Sie, Ihre Such- oder Filterkriterien anzupassen',

        // Event Form
        createNewEvent: 'Neue Veranstaltung erstellen',
        editEventDetails: 'Veranstaltung bearbeiten',
        fillEventDetails: 'Füllen Sie die Details aus, um Ihre Veranstaltung zu erstellen',
        updateEventDetails: 'Aktualisieren Sie die Details Ihrer Veranstaltung',
        basicInformation: 'Grundinformationen',
        eventTitleRequired: 'Veranstaltungstitel ist erforderlich',
        enterEventTitle: 'Veranstaltungstitel eingeben',
        descriptionRequired: 'Veranstaltungsbeschreibung ist erforderlich',
        describeEventDetail: 'Beschreiben Sie Ihre Veranstaltung im Detail...',
        categoryRequired: 'Kategorie ist erforderlich',
        selectCategory: 'Kategorie auswählen',
        maxCapacityRequired: 'Maximale Kapazität muss größer als 0 sein',
        maximumAttendees: 'Maximale Teilnehmerzahl',
        eventImageUrl: 'Veranstaltungsbild-URL',
        enterImageUrl: 'https://beispiel.com/veranstaltungsbild.jpg',

        // Date & Time
        dateTime: 'Datum & Zeit',
        multiDayEvent: 'Mehrtägige Veranstaltung: {count} Tage',
        dayEvent: '{count}-tägige Veranstaltung',
        startDateTime: 'Startdatum & -zeit',
        startDateTimeRequired: 'Startdatum der Veranstaltung ist erforderlich',
        endDateTime: 'Enddatum & -zeit',
        leaveEmptySingleSession: 'Leer lassen für einsitzige Veranstaltungen',
        endDateAfterStart: 'Enddatum muss nach dem Startdatum liegen',
        registrationDeadline: 'Anmeldefrist',
        whenRegistrationClose: 'Wann soll die Anmeldung geschlossen werden? (optional)',
        registrationDeadlineBeforeEvent: 'Anmeldefrist muss vor Veranstaltungsbeginn liegen',

        // Location
        location: 'Ort',
        onlineEvent: 'Dies ist eine Online-Veranstaltung',
        venueRequired: 'Veranstaltungsort ist für Präsenzveranstaltungen erforderlich',
        selectVenue: 'Veranstaltungsort auswählen',
        locationDetails: 'Ortsdetails',
        meetingLinkPlatform: 'Meeting-Link oder Plattformdetails',
        additionalLocationInfo: 'Zusätzliche Ortsinformationen',

        // Ticket Types
        ticketTypes: 'Tickettypen',
        addTicketType: 'Tickettyp hinzufügen',
        ticketTypesCount: 'Tickettypen',
        totalTypes: 'Gesamttypen',
        editable: 'Bearbeitbar',
        locked: 'Gesperrt',
        noTicketTypesYet: 'Noch keine Tickettypen',
        addTicketTypesToStart: 'Fügen Sie Tickettypen hinzu, um mit dem Verkauf von Tickets für Ihre Veranstaltung zu beginnen',
        createFirstTicketType: 'Ersten Tickettyp erstellen',
        ticketTypeName: 'Ticketname',
        ticketTypeNameRequired: 'Ticketname ist erforderlich',
        ticketDescription: 'Beschreibung',
        optionalTicketDescription: 'Optionale Beschreibung für diesen Tickettyp',
        price: 'Preis (RM)',
        priceRequired: 'Gültiger Preis ist erforderlich',
        quantity: 'Menge',
        quantityRequired: 'Ticketmenge muss größer als 0 sein',
        quantityGreaterThanZero: 'Menge muss größer als 0 sein',
        ticketActive: 'Aktiv (zum Kauf verfügbar)',
        availableForPurchase: 'Zum Kauf verfügbar',
        createTicketType: 'Tickettyp erstellen',
        updateTicketType: 'Tickettyp aktualisieren',
        editTicketType: 'Tickettyp bearbeiten',

        // Smart Editing
        smartTicketEditing: '💡 Intelligente Tickettyp-Bearbeitung',
        whenCanEdit: '✅ Wann Sie bearbeiten KÖNNEN:',
        eventDraftStatus: '• Veranstaltung ist im ENTWURF-Status',
        noTicketsSold: '• Noch keine Tickets verkauft',
        eventNotPublished: '• Veranstaltung ist nicht veröffentlicht',
        whenEditingLocked: '🔒 Wann die Bearbeitung GESPERRT ist:',
        eventIsPublished: '• Veranstaltung ist veröffentlicht',
        ticketsAlreadySold: '• Tickets wurden bereits verkauft',
        eventStatusNotDraft: '• Veranstaltungsstatus ist nicht ENTWURF',
        safeToEdit: 'Sicher zu bearbeiten - noch keine Verkäufe',
        lockedToPreserve: 'Gesperrt zur Erhaltung der Verkaufsdaten',
        ticketsSoldCount: '{count} Ticket(s) bereits verkauft. Bearbeitung ist gesperrt, um Kaufdaten zu erhalten.',
        cannotCreateTicketTypes: 'Kann keine neuen Tickettypen erstellen. {count} Ticket(s) wurden bereits verkauft.',
        salesDataIntegrity: 'Veranstaltung ist veröffentlicht. Kann keine Tickettypen erstellen, um die Integrität der Verkaufsdaten zu erhalten.',

        // Publishing
        publishingOptions: 'Veröffentlichungsoptionen',
        publishEventImmediately: 'Veranstaltung sofort veröffentlichen (für die Öffentlichkeit sichtbar machen)',
        makeVisiblePublic: 'Für die Öffentlichkeit sichtbar machen',
        publishUnpublishLater: 'Sie können Ihre Veranstaltung später jederzeit vom Dashboard aus veröffentlichen oder zurückziehen',
        currentlyPublished: 'Derzeit veröffentlicht',
        currentlyUnpublished: 'Derzeit nicht veröffentlicht',
        usePublishButtons: 'Verwenden Sie die Veröffentlichen/Zurückziehen-Buttons in der Veranstaltungsliste, um diesen Status zu ändern',
        changePublishStatus: 'Veröffentlichungsstatus ändern',

        // Validation
        fixErrorsBelow: 'Bitte beheben Sie die Fehler unten',
        formValidationError: 'Bitte beheben Sie Formularfehler',
        requiredField: 'Dieses Feld ist erforderlich',
        invalidInput: 'Ungültige Eingabe',

        // Success/Error Messages
        eventCreatedSuccessfully: 'Veranstaltung und alle Tickettypen erfolgreich erstellt!',
        eventUpdatedSuccessfully: 'Veranstaltung erfolgreich aktualisiert!',
        ticketTypeCreatedSuccessfully: 'Tickettyp erfolgreich erstellt!',
        ticketTypeUpdatedSuccessfully: 'Tickettyp erfolgreich aktualisiert!',
        failedToCreateEvent: 'Fehler beim Erstellen der Veranstaltung. Bitte versuchen Sie es erneut.',
        failedToUpdateEvent: 'Fehler beim Aktualisieren der Veranstaltung. Bitte versuchen Sie es erneut.',
        failedToCreateTicketType: 'Fehler beim Erstellen des Tickettyps',
        failedToUpdateTicketType: 'Fehler beim Aktualisieren des Tickettyps',
        creatingEvent: 'Veranstaltung wird erstellt...',
        updatingEvent: 'Veranstaltung wird aktualisiert...',
        redirectingToDashboard: 'Weiterleitung zum Dashboard...',
        redirectingToEventDetail: 'Weiterleitung zu Veranstaltungsdetails...',

        // Capacity and Venues
        capacity: 'Kapazität',
        venue: 'Veranstaltungsort',
        selectAVenue: 'Veranstaltungsort auswählen',
        venueWithCapacity: '{name} - {city} (Kapazität: {capacity})',

        // Categories
        category: 'Kategorie',
        technology: 'Technologie',
        business: 'Geschäft',
        music: 'Musik',
        sports: 'Sport',
        education: 'Bildung',

        // Event States
        published: 'Veröffentlicht',
        draft: 'Entwurf',
        online: 'Online',
        inPerson: 'Präsenz',

        // Multi-day
        multiDaySchedule: 'Mehrtägiger Zeitplan',

        // Venue Management
        venues: 'Veranstaltungsorte',
        createVenue: 'Veranstaltungsort erstellen',
        venueName: 'Name des Veranstaltungsortes',
        venueNameRequired: 'Name des Veranstaltungsortes ist erforderlich',
        enterVenueName: 'Name des Veranstaltungsortes eingeben',
        venueAddress: 'Adresse',
        addressRequired: 'Adresse ist erforderlich',
        enterVenueAddress: 'Adresse des Veranstaltungsortes eingeben',
        venueState: 'Bundesland',
        enterState: 'Bundesland eingeben',
        enterStateOptional: 'Bundesland eingeben (optional)',
        venueCountry: 'Land',
        countryRequired: 'Land ist erforderlich',
        enterCountry: 'Land eingeben',
        venueZipCode: 'Postleitzahl',
        enterZipCode: 'Postleitzahl eingeben',
        enterZipCodeOptional: 'Postleitzahl eingeben (optional)',
        capacityRequired: 'Kapazität muss größer als 0 sein',
        maximumCapacity: 'Maximale Kapazität',
        contactEmail: 'Kontakt-E-Mail',
        contactPhone: 'Kontakttelefon',
        website: 'Website',
        latitude: 'Breitengrad',
        longitude: 'Längengrad',
        description: 'Beschreibung',
        venueDescription: 'Beschreibung des Veranstaltungsortes',
        describeVenue: 'Beschreiben Sie den Veranstaltungsort, Annehmlichkeiten, besondere Merkmale...',
        venueImageUrl: 'Bild-URL des Veranstaltungsortes',
        validEmailRequired: 'Bitte geben Sie eine gültige E-Mail-Adresse ein',
        latitudeBetween: 'Breitengrad muss zwischen -90 und 90 liegen',
        longitudeBetween: 'Längengrad muss zwischen -180 und 180 liegen',
        optionalMapIntegration: 'Optional: Für Kartenintegration',
        createNewVenue: 'Neuen Veranstaltungsort erstellen',
        venueCreatedSuccessfully: 'Veranstaltungsort erfolgreich erstellt!',
        failedToCreateVenue: 'Fehler beim Erstellen des Veranstaltungsortes. Bitte versuchen Sie es erneut.',
        failedToFetchVenues: 'Fehler beim Laden der Veranstaltungsorte',
        creatingVenue: 'Wird erstellt...',
        loadingVenues: 'Veranstaltungsorte werden geladen...',
        searchVenues: 'Veranstaltungsorte suchen...',
        allCities: 'Alle Städte',
        noVenuesFound: 'Keine Veranstaltungsorte gefunden',
        adjustFilters: 'Versuchen Sie, Ihre Filter anzupassen',
        getStartedFirstVenue: 'Beginnen Sie mit der Erstellung Ihres ersten Veranstaltungsortes',
        venueLocation: 'Ort',
        venueCapacity: 'Kapazität',
        venueEvents: 'Veranstaltungen',
        venueStatus: 'Status',
        active: 'Aktiv',
        inactive: 'Inaktiv',
        eventsCount: '{count} Veranstaltungen',
        viewAvailableVenues: 'Verfügbare Veranstaltungsorte anzeigen und neue erstellen',
        createNewOnes: 'Neue erstellen',

        // Ticket Management
        tickets: 'Tickets',
        ticketManagement: 'Ticket-Verwaltung',
        manageTicketTypes: 'Verwalten Sie Tickettypen, validieren Sie Tickets und bearbeiten Sie Check-ins',
        validateTickets: 'Tickets validieren',
        checkIn: 'Check-in',
        ticketValidation: 'Ticket-Validierung',
        ticketCheckIn: 'Ticket-Check-in',
        ticketsAndCheckIn: 'Tickets & Check-in',

        // Ticket Types Management
        createTicketTypeAction: 'Tickettyp erstellen',
        ticketTypeLimitations: '⚠️ Wichtig: Einschränkungen bei der Erstellung von Tickettypen',
        publishedEventsRestriction: 'Veröffentlichte Veranstaltungen: Tickettypen können nicht geändert werden, um bestehende Verkaufsdaten zu erhalten',
        eventsWithSalesRestriction: 'Veranstaltungen mit Verkäufen: Die Bearbeitung von Tickettypen wird gesperrt, sobald Tickets verkauft werden',
        draftStatusRequired: 'Für die Erstellung von Tickettypen: Veranstaltungen müssen im ENTWURF-Status ohne bestehende Verkäufe sein',
        alternativeCreateEvent: 'Alternative: Erstellen Sie eine neue Veranstaltung, wenn Sie andere Tickettypen benötigen',
        onlyWorksForDraft: 'Funktioniert nur für Entwurfs-Veranstaltungen ohne bestehende Verkäufe',
        createNewEventLink: 'Neue Veranstaltung erstellen',
        manageEventsLink: 'Veranstaltungen verwalten',

        // Ticket Form
        selectAnEvent: 'Veranstaltung auswählen',
        ticketCreationRequirements: '⚠️ Anforderungen für die Ticket-Erstellung',
        eventMustBeDraft: 'Veranstaltung muss im ENTWURF-Status sein (nicht veröffentlicht)',
        noExistingTicketSales: 'Veranstaltung darf keine bestehenden Ticketverkäufe haben',
        mustBeEventOrganizer: 'Sie müssen der Veranstaltungsorganisator sein',
        editTicketsDuringCreation: 'Falls dies fehlschlägt, bearbeiten Sie Tickettypen während der Veranstaltungserstellung',
        ticketEvent: 'Veranstaltung',
        eventRequired: 'Veranstaltung ist erforderlich',
        noEventsFound: 'Keine Veranstaltungen gefunden',
        needCreateEventFirst: 'Sie müssen zuerst eine Veranstaltung erstellen, bevor Sie Tickettypen erstellen.',

        // Ticket Types Display
        loadingTicketTypes: 'Tickettypen werden geladen...',
        noTicketTypesFound: 'Keine Tickettypen gefunden',
        adjustFiltersOrCreate: 'Versuchen Sie, Ihre Filter anzupassen oder erstellen Sie Ihren ersten Tickettyp',
        createFirstTicketTypePrompt: 'Erstellen Sie Ihren ersten Tickettyp',
        ticketType: 'Tickettyp',
        event: 'Veranstaltung',
        availability: 'Verfügbarkeit',
        status: 'Status',
        remaining: 'verbleibend',

        // Validation Tab
        validateTicket: 'Ticket validieren',
        enterTicketNumber: 'Ticketnummer eingeben',
        validating: 'Wird validiert...',
        validate: 'Validieren',
        validTicket: 'Gültiges Ticket',
        invalidTicket: 'Ungültiges Ticket',
        ticketNumber: 'Ticketnummer',
        attendeeName: 'Teilnehmer',
        alreadyUsed: 'Bereits verwendet',
        notUsed: 'Nicht verwendet',

        // Check-in Tab
        checkInTicket: 'Ticket-Check-in',
        enterTicketNumberCheckIn: 'Ticketnummer für Check-in eingeben',
        checkingIn: 'Check-in läuft...',
        ticketCheckedInSuccessfully: 'Ticket erfolgreich eingecheckt',

        // Ticket Warnings
        importantTicketLimitations: '⚠️ Wichtig: Einschränkungen bei der Erstellung von Tickettypen',
        cannotModifyPublished: '• Veröffentlichte Veranstaltungen: Tickettypen können nicht geändert werden, um bestehende Verkaufsdaten zu erhalten',
        editingLockedAfterSales: '• Veranstaltungen mit Verkäufen: Die Bearbeitung von Tickettypen wird gesperrt, sobald Tickets verkauft werden',
        draftStatusForCreation: '• Für die Erstellung von Tickettypen: Veranstaltungen müssen im ENTWURF-Status ohne bestehende Verkäufe sein',
        createNewEventAlternative: '• Alternative: Erstellen Sie eine neue Veranstaltung, wenn Sie andere Tickettypen benötigen',

        // Business Rules
        businessRulesWarning: '⚠️ Anforderungen für die Ticket-Erstellung',

        // Ticket States
        ticketInactive: 'Inaktiv',

        // General UI
        optional: 'optional',
        required: 'erforderlich',

        // Appearance
        theme: 'Design',
        lightMode: 'Heller Modus',
        darkMode: 'Dunkler Modus',
        autoMode: 'Automatischer Modus',
        accentColor: 'Akzentfarbe',
        fontSize: 'Schriftgröße',
        compactMode: 'Kompakter Modus',

        // Time and Date
        timeFormat: 'Zeitformat',
        dateFormat: 'Datumsformat',
        currency: 'Währung',
        timezone: 'Zeitzone',

        // Messages
        saveSuccess: 'Einstellungen erfolgreich gespeichert!',
        saveError: 'Fehler beim Speichern der Einstellungen',
        loadError: 'Fehler beim Laden der Daten',

        // Dashboard specific
        welcomeBack: 'Willkommen zurück, {name}!',
        virtualEvent: 'Virtuelle Veranstaltung',
        viewAllEvents: 'Alle Veranstaltungen anzeigen →',
        upcomingEvents: 'Bevorstehende Veranstaltungen',
        unpublish: 'Zurückziehen',
        unlimited: 'Unbegrenzt',
        uncategorized: 'Unkategorisiert',
        totalRevenue: 'Gesamtumsatz',
        totalEvents: 'Gesamte Veranstaltungen',
        ticketsSold: 'Verkaufte Tickets',
        revenue: 'Umsatz',
        publish: 'Veröffentlichen',
        noEventsYet: 'Noch keine Veranstaltungen',
        maxCapacity: 'Maximale Kapazität',
        loadingDashboard: 'Dashboard wird geladen...',
        dashboardError: 'Fehler beim Laden der Dashboard-Daten',
        publishedCount: '{count} veröffentlicht'
    },

    // Italian translations
    it: {
        // Common
        save: 'Salva',
        cancel: 'Annulla',
        delete: 'Elimina',
        edit: 'Modifica',
        view: 'Visualizza',
        loading: 'Caricamento...',
        error: 'Errore',
        success: 'Successo',
        confirm: 'Conferma',
        back: 'Indietro',
        create: 'Crea',
        update: 'Aggiorna',

        // Navigation
        dashboard: 'Dashboard',
        events: 'Eventi',
        settings: 'Impostazioni',
        profile: 'Profilo',
        logout: 'Disconnetti',

        // Settings
        personalInformation: 'Informazioni personali',
        organization: 'Organizzazione',
        notifications: 'Notifiche',
        security: 'Sicurezza',
        appearance: 'Aspetto',
        language: 'Lingua',
        preferences: 'Preferenze',

        // Profile
        firstName: 'Nome',
        lastName: 'Cognome',
        email: 'Email',
        phoneNumber: 'Numero di telefono',
        companyName: 'Nome dell\'azienda',
        address: 'Indirizzo',
        city: 'Città',
        state: 'Stato',
        zipCode: 'Codice postale',
        country: 'Paese',

        // Events
        createEvent: 'Crea evento',
        editEvent: 'Modifica evento',
        eventTitle: 'Titolo dell\'evento',
        eventDescription: 'Descrizione dell\'evento',
        eventDate: 'Data dell\'evento',
        eventTime: 'Ora dell\'evento',
        eventLocation: 'Luogo dell\'evento',
        ticketPrice: 'Prezzo del biglietto',
        yourEvents: 'I tuoi eventi',
        createYourFirstEvent: 'Crea il tuo primo evento',
        createFirstEventPrompt: 'Crea il tuo primo evento per iniziare con EventPro.',
        eventsSubtitle: 'Gestisci i tuoi eventi e monitora le loro prestazioni',
        allEvents: 'Tutti gli eventi',
        unpublished: 'Non pubblicato',
        searchEvents: 'Cerca eventi...',
        noDescriptionAvailable: 'Nessuna descrizione disponibile',
        dateNotSet: 'Data non impostata',
        invalidDate: 'Data non valida',
        timeNotSet: 'Ora non impostata',
        invalidTime: 'Ora non valida',
        confirmDeleteEvent: 'Sei sicuro di voler eliminare "{title}"? Questa azione non può essere annullata.',
        failedToDeleteEvent: 'Impossibile eliminare l\'evento',
        failedToTogglePublish: 'Impossibile {action} l\'evento',
        noEventsMatchSearch: 'Nessun evento corrisponde alla tua ricerca',
        adjustSearchCriteria: 'Prova ad aggiustare i tuoi criteri di ricerca o filtro',

        // Event Form
        createNewEvent: 'Crea nuovo evento',
        editEventDetails: 'Modifica evento',
        fillEventDetails: 'Compila i dettagli per creare il tuo evento',
        updateEventDetails: 'Aggiorna i dettagli del tuo evento',
        basicInformation: 'Informazioni di base',
        eventTitleRequired: 'Il titolo dell\'evento è obbligatorio',
        enterEventTitle: 'Inserisci il titolo dell\'evento',
        descriptionRequired: 'La descrizione dell\'evento è obbligatoria',
        describeEventDetail: 'Descrivi il tuo evento in dettaglio...',
        categoryRequired: 'La categoria è obbligatoria',
        selectCategory: 'Seleziona categoria',
        maxCapacityRequired: 'La capacità massima deve essere maggiore di 0',
        maximumAttendees: 'Numero massimo di partecipanti',
        eventImageUrl: 'URL immagine evento',
        enterImageUrl: 'https://esempio.com/immagine-evento.jpg',

        // Date & Time
        dateTime: 'Data e ora',
        multiDayEvent: 'Evento di più giorni: {count} giorni',
        dayEvent: 'Evento di {count} giorno',
        startDateTime: 'Data e ora di inizio',
        startDateTimeRequired: 'La data di inizio dell\'evento è obbligatoria',
        endDateTime: 'Data e ora di fine',
        leaveEmptySingleSession: 'Lascia vuoto per eventi a sessione singola',
        endDateAfterStart: 'La data di fine deve essere dopo la data di inizio',
        registrationDeadline: 'Scadenza registrazione',
        whenRegistrationClose: 'Quando dovrebbe chiudersi la registrazione? (opzionale)',
        registrationDeadlineBeforeEvent: 'La scadenza della registrazione deve essere prima dell\'inizio dell\'evento',

        // Location
        location: 'Luogo',
        onlineEvent: 'Questo è un evento online',
        venueRequired: 'Il luogo è obbligatorio per eventi in presenza',
        selectVenue: 'Seleziona luogo',
        locationDetails: 'Dettagli del luogo',
        meetingLinkPlatform: 'Link della riunione o dettagli della piattaforma',
        additionalLocationInfo: 'Informazioni aggiuntive sul luogo',

        // Ticket Types
        ticketTypes: 'Tipi di biglietto',
        addTicketType: 'Aggiungi tipo di biglietto',
        ticketTypesCount: 'Tipi di biglietto',
        totalTypes: 'Tipi totali',
        editable: 'Modificabile',
        locked: 'Bloccato',
        noTicketTypesYet: 'Nessun tipo di biglietto ancora',
        addTicketTypesToStart: 'Aggiungi tipi di biglietto per iniziare a vendere biglietti per il tuo evento',
        createFirstTicketType: 'Crea primo tipo di biglietto',
        ticketTypeName: 'Nome biglietto',
        ticketTypeNameRequired: 'Il nome del biglietto è obbligatorio',
        ticketDescription: 'Descrizione',
        optionalTicketDescription: 'Descrizione opzionale per questo tipo di biglietto',
        price: 'Prezzo (RM)',
        priceRequired: 'È richiesto un prezzo valido',
        quantity: 'Quantità',
        quantityRequired: 'La quantità di biglietti deve essere maggiore di 0',
        quantityGreaterThanZero: 'La quantità deve essere maggiore di 0',
        ticketActive: 'Attivo (disponibile per l\'acquisto)',
        availableForPurchase: 'Disponibile per l\'acquisto',
        createTicketType: 'Crea tipo di biglietto',
        updateTicketType: 'Aggiorna tipo di biglietto',
        editTicketType: 'Modifica tipo di biglietto',

        // Smart Editing
        smartTicketEditing: '💡 Modifica intelligente dei tipi di biglietto',
        whenCanEdit: '✅ Quando PUOI modificare:',
        eventDraftStatus: '• L\'evento è in stato BOZZA',
        noTicketsSold: '• Nessun biglietto venduto ancora',
        eventNotPublished: '• L\'evento non è pubblicato',
        whenEditingLocked: '🔒 Quando la modifica è BLOCCATA:',
        eventIsPublished: '• L\'evento è pubblicato',
        ticketsAlreadySold: '• I biglietti sono già stati venduti',
        eventStatusNotDraft: '• Lo stato dell\'evento non è BOZZA',
        safeToEdit: 'Sicuro da modificare - nessuna vendita ancora',
        lockedToPreserve: 'Bloccato per preservare i dati di vendita',
        ticketsSoldCount: '{count} biglietto/i già venduto/i. La modifica è bloccata per preservare i dati di acquisto.',
        cannotCreateTicketTypes: 'Impossibile creare nuovi tipi di biglietto. {count} biglietto/i sono già stati venduti.',
        salesDataIntegrity: 'L\'evento è pubblicato. Impossibile creare tipi di biglietto per preservare l\'integrità dei dati di vendita.',

        // Publishing
        publishingOptions: 'Opzioni di pubblicazione',
        publishEventImmediately: 'Pubblica evento immediatamente (rendilo visibile al pubblico)',
        makeVisiblePublic: 'Rendilo visibile al pubblico',
        publishUnpublishLater: 'Puoi sempre pubblicare o annullare la pubblicazione del tuo evento più tardi dalla dashboard',
        currentlyPublished: 'Attualmente pubblicato',
        currentlyUnpublished: 'Attualmente non pubblicato',
        usePublishButtons: 'Usa i pulsanti pubblica/annulla pubblicazione nell\'elenco eventi per cambiare questo stato',
        changePublishStatus: 'Cambia stato di pubblicazione',

        // Validation
        fixErrorsBelow: 'Si prega di correggere gli errori sotto',
        formValidationError: 'Si prega di correggere gli errori del modulo',
        requiredField: 'Questo campo è obbligatorio',
        invalidInput: 'Input non valido',

        // Success/Error Messages
        eventCreatedSuccessfully: 'Evento e tutti i tipi di biglietto creati con successo!',
        eventUpdatedSuccessfully: 'Evento aggiornato con successo!',
        ticketTypeCreatedSuccessfully: 'Tipo di biglietto creato con successo!',
        ticketTypeUpdatedSuccessfully: 'Tipo di biglietto aggiornato con successo!',
        failedToCreateEvent: 'Impossibile creare l\'evento. Si prega di riprovare.',
        failedToUpdateEvent: 'Impossibile aggiornare l\'evento. Si prega di riprovare.',
        failedToCreateTicketType: 'Impossibile creare il tipo di biglietto',
        failedToUpdateTicketType: 'Impossibile aggiornare il tipo di biglietto',
        creatingEvent: 'Creazione evento...',
        updatingEvent: 'Aggiornamento evento...',
        redirectingToDashboard: 'Reindirizzamento alla dashboard...',
        redirectingToEventDetail: 'Reindirizzamento ai dettagli dell\'evento...',

        // Capacity and Venues
        capacity: 'Capacità',
        venue: 'Luogo',
        selectAVenue: 'Seleziona un luogo',
        venueWithCapacity: '{name} - {city} (Capacità: {capacity})',

        // Categories
        category: 'Categoria',
        technology: 'Tecnologia',
        business: 'Business',
        music: 'Musica',
        sports: 'Sport',
        education: 'Educazione',

        // Event States
        published: 'Pubblicato',
        draft: 'Bozza',
        online: 'Online',
        inPerson: 'In presenza',

        // Multi-day
        multiDaySchedule: 'Programma multi-giorno',

        // Venue Management
        venues: 'Luoghi',
        createVenue: 'Crea luogo',
        venueName: 'Nome del luogo',
        venueNameRequired: 'Il nome del luogo è obbligatorio',
        enterVenueName: 'Inserisci il nome del luogo',
        venueAddress: 'Indirizzo',
        addressRequired: 'L\'indirizzo è obbligatorio',
        enterVenueAddress: 'Inserisci l\'indirizzo del luogo',
        venueState: 'Stato',
        enterState: 'Inserisci lo stato',
        enterStateOptional: 'Inserisci lo stato (opzionale)',
        venueCountry: 'Paese',
        countryRequired: 'Il paese è obbligatorio',
        enterCountry: 'Inserisci il paese',
        venueZipCode: 'Codice postale',
        enterZipCode: 'Inserisci il codice postale',
        enterZipCodeOptional: 'Inserisci il codice postale (opzionale)',
        capacityRequired: 'La capacità deve essere maggiore di 0',
        maximumCapacity: 'Capacità massima',
        contactEmail: 'Email di contatto',
        contactPhone: 'Telefono di contatto',
        website: 'Sito web',
        latitude: 'Latitudine',
        longitude: 'Longitudine',
        description: 'Descrizione',
        venueDescription: 'Descrizione del luogo',
        describeVenue: 'Descrivi il luogo, i servizi, le caratteristiche speciali...',
        venueImageUrl: 'URL immagine del luogo',
        validEmailRequired: 'Si prega di inserire un indirizzo email valido',
        latitudeBetween: 'La latitudine deve essere tra -90 e 90',
        longitudeBetween: 'La longitudine deve essere tra -180 e 180',
        optionalMapIntegration: 'Opzionale: Per l\'integrazione delle mappe',
        createNewVenue: 'Crea nuovo luogo',
        venueCreatedSuccessfully: 'Luogo creato con successo!',
        failedToCreateVenue: 'Impossibile creare il luogo. Si prega di riprovare.',
        failedToFetchVenues: 'Impossibile caricare i luoghi',
        creatingVenue: 'Creazione...',
        loadingVenues: 'Caricamento luoghi...',
        searchVenues: 'Cerca luoghi...',
        allCities: 'Tutte le città',
        noVenuesFound: 'Nessun luogo trovato',
        adjustFilters: 'Prova ad aggiustare i tuoi filtri',
        getStartedFirstVenue: 'Inizia creando il tuo primo luogo',
        venueLocation: 'Posizione',
        venueCapacity: 'Capacità',
        venueEvents: 'Eventi',
        venueStatus: 'Stato',
        active: 'Attivo',
        inactive: 'Inattivo',
        eventsCount: '{count} eventi',
        viewAvailableVenues: 'Visualizza luoghi disponibili e creane di nuovi',
        createNewOnes: 'Creane di nuovi',

        // Ticket Management
        tickets: 'Biglietti',
        ticketManagement: 'Gestione biglietti',
        manageTicketTypes: 'Gestisci tipi di biglietto, valida biglietti e gestisci check-in',
        validateTickets: 'Valida biglietti',
        checkIn: 'Check-in',
        ticketValidation: 'Validazione biglietti',
        ticketCheckIn: 'Check-in biglietti',
        ticketsAndCheckIn: 'Biglietti e check-in',

        // Ticket Types Management
        createTicketTypeAction: 'Crea tipo di biglietto',
        ticketTypeLimitations: '⚠️ Importante: Limitazioni nella creazione dei tipi di biglietto',
        publishedEventsRestriction: 'Eventi pubblicati: I tipi di biglietto non possono essere modificati per preservare i dati di vendita esistenti',
        eventsWithSalesRestriction: 'Eventi con vendite: La modifica dei tipi di biglietto è bloccata una volta che i biglietti sono venduti',
        draftStatusRequired: 'Per la creazione di tipi di biglietto: Gli eventi devono essere in stato BOZZA senza vendite esistenti',
        alternativeCreateEvent: 'Alternativa: Crea un nuovo evento se hai bisogno di tipi di biglietto diversi',
        onlyWorksForDraft: 'Funziona solo per eventi in bozza senza vendite esistenti',
        createNewEventLink: 'Crea nuovo evento',
        manageEventsLink: 'Gestisci eventi',

        // Ticket Form
        selectAnEvent: 'Seleziona un evento',
        ticketCreationRequirements: '⚠️ Requisiti per la creazione di biglietti',
        eventMustBeDraft: 'L\'evento deve essere in stato BOZZA (non pubblicato)',
        noExistingTicketSales: 'L\'evento non deve avere vendite di biglietti esistenti',
        mustBeEventOrganizer: 'Devi essere l\'organizzatore dell\'evento',
        editTicketsDuringCreation: 'Se questo fallisce, modifica i tipi di biglietto durante la creazione dell\'evento',
        ticketEvent: 'Evento',
        eventRequired: 'L\'evento è obbligatorio',
        noEventsFound: 'Nessun evento trovato',
        needCreateEventFirst: 'Devi creare un evento prima di creare tipi di biglietto.',

        // Ticket Types Display
        loadingTicketTypes: 'Caricamento tipi di biglietto...',
        noTicketTypesFound: 'Nessun tipo di biglietto trovato',
        adjustFiltersOrCreate: 'Prova ad aggiustare i tuoi filtri o crea il tuo primo tipo di biglietto',
        createFirstTicketTypePrompt: 'Crea il tuo primo tipo di biglietto',
        ticketType: 'Tipo di biglietto',
        event: 'Evento',
        availability: 'Disponibilità',
        status: 'Stato',
        remaining: 'rimanenti',

        // Validation Tab
        validateTicket: 'Valida biglietto',
        enterTicketNumber: 'Inserisci il numero del biglietto',
        validating: 'Validazione...',
        validate: 'Valida',
        validTicket: 'Biglietto valido',
        invalidTicket: 'Biglietto non valido',
        ticketNumber: 'Numero biglietto',
        attendeeName: 'Partecipante',
        alreadyUsed: 'Già usato',
        notUsed: 'Non usato',

        // Check-in Tab
        checkInTicket: 'Check-in biglietto',
        enterTicketNumberCheckIn: 'Inserisci il numero del biglietto per il check-in',
        checkingIn: 'Check-in in corso...',
        ticketCheckedInSuccessfully: 'Biglietto registrato con successo',

        // Ticket Warnings
        importantTicketLimitations: '⚠️ Importante: Limitazioni nella creazione dei tipi di biglietto',
        cannotModifyPublished: '• Eventi pubblicati: I tipi di biglietto non possono essere modificati per preservare i dati di vendita esistenti',
        editingLockedAfterSales: '• Eventi con vendite: La modifica dei tipi di biglietto è bloccata una volta che i biglietti sono venduti',
        draftStatusForCreation: '• Per la creazione di tipi di biglietto: Gli eventi devono essere in stato BOZZA senza vendite esistenti',
        createNewEventAlternative: '• Alternativa: Crea un nuovo evento se hai bisogno di tipi di biglietto diversi',

        // Business Rules
        businessRulesWarning: '⚠️ Requisiti per la creazione di biglietti',

        // Ticket States
        ticketInactive: 'Inattivo',

        // General UI
        optional: 'opzionale',
        required: 'obbligatorio',

        // Appearance
        theme: 'Tema',
        lightMode: 'Modalità chiara',
        darkMode: 'Modalità scura',
        autoMode: 'Modalità automatica',
        accentColor: 'Colore accento',
        fontSize: 'Dimensione carattere',
        compactMode: 'Modalità compatta',

        // Time and Date
        timeFormat: 'Formato ora',
        dateFormat: 'Formato data',
        currency: 'Valuta',
        timezone: 'Fuso orario',

        // Messages
        saveSuccess: 'Impostazioni salvate con successo!',
        saveError: 'Impossibile salvare le impostazioni',
        loadError: 'Impossibile caricare i dati',

        // Dashboard specific
        welcomeBack: 'Bentornato, {name}!',
        virtualEvent: 'Evento virtuale',
        viewAllEvents: 'Visualizza tutti gli eventi →',
        upcomingEvents: 'Eventi in arrivo',
        unpublish: 'Annulla pubblicazione',
        unlimited: 'Illimitato',
        uncategorized: 'Non categorizzato',
        totalRevenue: 'Ricavi totali',
        totalEvents: 'Eventi totali',
        ticketsSold: 'Biglietti venduti',
        revenue: 'Ricavi',
        publish: 'Pubblica',
        noEventsYet: 'Nessun evento ancora',
        maxCapacity: 'Capacità massima',
        loadingDashboard: 'Caricamento della tua dashboard...',
        dashboardError: 'Impossibile caricare i dati della dashboard',
        publishedCount: '{count} pubblicati'
    }
};
// I18n Context
interface I18nContextType {
    currentLanguage: string;
    currentLangData: typeof SUPPORTED_LANGUAGES[0];
    isRTL: boolean;
    t: (key: keyof TranslationKeys, params?: Record<string, any>) => string;
    formatCurrency: (amount: number, currency?: string) => string;
    formatDate: (date: Date, format?: string) => string;
    formatTime: (date: Date, format?: '12h' | '24h') => string;
    changeLanguage: (languageCode: string) => void;
    supportedLanguages: typeof SUPPORTED_LANGUAGES;
    availableLanguages: Array<{
        code: string;
        name: string;
        nativeName: string;
        flag: string;
    }>;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

// Provider component
export const I18nProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [currentLanguage, setCurrentLanguage] = useState('en');
    const [isRTL, setIsRTL] = useState(false);

    // Get current language data
    const currentLangData = SUPPORTED_LANGUAGES.find(lang => lang.code === currentLanguage) || SUPPORTED_LANGUAGES[0];

    // Translation function with interpolation support
    const t = useCallback((key: keyof TranslationKeys, params?: Record<string, any>): string => {
        const translation = translations[currentLanguage]?.[key] || translations['en'][key] || key;
        return params ? interpolate(translation, params) : translation;
    }, [currentLanguage]);

    // Format currency
    const formatCurrency = useCallback((amount: number, currency?: string): string => {
        const currencyCode = currency || currentLangData.currency;
        try {
            return new Intl.NumberFormat(currentLangData.region, {
                style: 'currency',
                currency: currencyCode,
            }).format(amount);
        } catch {
            return `${amount} ${currencyCode}`;
        }
    }, [currentLangData]);

    // Format date
    const formatDate = useCallback((date: Date, format?: string): string => {
        try {
            return new Intl.DateTimeFormat(currentLangData.region).format(date);
        } catch {
            return date.toLocaleDateString();
        }
    }, [currentLangData]);

    // Format time
    const formatTime = useCallback((date: Date, format?: '12h' | '24h'): string => {
        const timeFormat = format || currentLangData.timeFormat;
        try {
            return new Intl.DateTimeFormat(currentLangData.region, {
                hour: '2-digit',
                minute: '2-digit',
                hour12: timeFormat === '12h'
            }).format(date);
        } catch {
            return date.toLocaleTimeString();
        }
    }, [currentLangData]);

    // Change language
    const changeLanguage = useCallback((languageCode: string) => {
        const langData = SUPPORTED_LANGUAGES.find(lang => lang.code === languageCode);
        if (langData) {
            setCurrentLanguage(languageCode);
            setIsRTL(langData.direction === 'rtl');

            // Update document direction
            if (typeof document !== 'undefined') {
                document.documentElement.dir = langData.direction;
                document.documentElement.lang = languageCode;
            }

            // Save to localStorage
            try {
                localStorage.setItem('selectedLanguage', languageCode);
            } catch (error) {
                console.error('Error saving language preference:', error);
            }
        }
    }, []);

    // Load saved language on mount
    useEffect(() => {
        try {
            const savedLanguage = localStorage.getItem('selectedLanguage');
            if (savedLanguage && SUPPORTED_LANGUAGES.find(lang => lang.code === savedLanguage)) {
                changeLanguage(savedLanguage);
            } else {
                // Detect browser language
                const browserLang = navigator.language.split('-')[0];
                const supportedLang = SUPPORTED_LANGUAGES.find(lang => lang.code === browserLang);
                if (supportedLang) {
                    changeLanguage(browserLang);
                }
            }
        } catch (error) {
            console.error('Error loading language preference:', error);
        }
    }, [changeLanguage]);

    const contextValue: I18nContextType = {
        currentLanguage,
        currentLangData,
        isRTL,
        t,
        formatCurrency,
        formatDate,
        formatTime,
        changeLanguage,
        supportedLanguages: SUPPORTED_LANGUAGES,
        availableLanguages: SUPPORTED_LANGUAGES.map(lang => ({
            code: lang.code,
            name: lang.name,
            nativeName: lang.nativeName,
            flag: lang.flag
        }))
    };

    return (
        <I18nContext.Provider value={contextValue}>
            {children}
        </I18nContext.Provider>
    );
};

// Hook to use I18n context
export const useI18nContext = () => {
    const context = useContext(I18nContext);
    if (!context) {
        throw new Error('useI18nContext must be used within an I18nProvider');
    }
    return context;
};

// Also export as useI18n for compatibility with existing code
export const useI18n = useI18nContext;

export default translations;

// ========================================
// REMOVE ALL THE ABOVE CODE FROM YOUR FILE
// ========================================

// KEEP ONLY this at the very end of your file:
