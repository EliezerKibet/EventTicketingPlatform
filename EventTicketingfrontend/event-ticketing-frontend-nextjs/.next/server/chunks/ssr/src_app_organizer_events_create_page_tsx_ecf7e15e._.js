module.exports = {

"[project]/src/app/organizer/events/create/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* eslint-disable @typescript-eslint/no-unused-vars */ __turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useAuth.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$providers$2f$I18nProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/providers/I18nProvider.tsx [app-ssr] (ecmascript)"); // Add this import
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-ssr] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTheme$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useTheme.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const CreateEventPage = ()=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { user, isOrganizer } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$providers$2f$I18nProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useI18n"])(); // Add this hook
    const themeClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTheme$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useThemeClasses"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [venues, setVenues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    // Form state
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        title: '',
        description: '',
        eventDate: '',
        endDate: '',
        location: '',
        isOnline: false,
        maxCapacity: '',
        categoryId: '',
        venueId: null,
        imageUrl: '',
        registrationDeadline: '',
        isPublished: false
    });
    // Ticket types state
    const [ticketTypes, setTicketTypes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        {
            name: 'General Admission',
            price: 0,
            quantity: 100,
            description: '',
            isActive: true
        }
    ]);
    const [formErrors, setFormErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    // Fetch initial data
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (user && isOrganizer) {
            fetchInitialData();
        } else if (user && !isOrganizer) {
            router.push('/');
        }
    }, [
        user,
        isOrganizer,
        router
    ]);
    const fetchInitialData = async ()=>{
        try {
            // Fetch categories from your API
            const categoriesResponse = await fetch('http://localhost:5251/api/categories', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                }
            });
            if (categoriesResponse.ok) {
                const categoriesData = await categoriesResponse.json();
                setCategories(categoriesData);
            } else {
                // Fallback to mock data if API fails
                const mockCategories = [
                    {
                        categoryId: 1,
                        name: t('technology'),
                        description: 'Tech events'
                    },
                    {
                        categoryId: 2,
                        name: t('business'),
                        description: 'Business events'
                    },
                    {
                        categoryId: 3,
                        name: t('music'),
                        description: 'Music events'
                    },
                    {
                        categoryId: 4,
                        name: t('sports'),
                        description: 'Sports events'
                    },
                    {
                        categoryId: 5,
                        name: t('education'),
                        description: 'Educational events'
                    }
                ];
                setCategories(mockCategories);
            }
            // Fetch venues from your API
            const venuesResponse = await fetch('http://localhost:5251/api/venues', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                }
            });
            if (venuesResponse.ok) {
                const venuesData = await venuesResponse.json();
                setVenues(venuesData);
            } else {
                // Fallback to mock data if API fails
                const mockVenues = [
                    {
                        venueId: 1,
                        name: 'KLCC Convention Center',
                        address: 'Kuala Lumpur City Centre',
                        city: 'Kuala Lumpur',
                        capacity: 1000
                    },
                    {
                        venueId: 2,
                        name: 'Sunway Convention Centre',
                        address: 'Bandar Sunway',
                        city: 'Petaling Jaya',
                        capacity: 800
                    },
                    {
                        venueId: 3,
                        name: 'Mid Valley Exhibition Centre',
                        address: 'Mid Valley City',
                        city: 'Kuala Lumpur',
                        capacity: 500
                    },
                    {
                        venueId: 4,
                        name: 'Penang International Convention Centre',
                        address: 'Georgetown',
                        city: 'Penang',
                        capacity: 600
                    }
                ];
                setVenues(mockVenues);
            }
        } catch (error) {
            console.error('Error fetching initial data:', error);
            setError(t('loadError'));
            // Set fallback mock data
            setCategories([
                {
                    categoryId: 1,
                    name: t('technology'),
                    description: 'Tech events'
                },
                {
                    categoryId: 2,
                    name: t('business'),
                    description: 'Business events'
                },
                {
                    categoryId: 3,
                    name: t('music'),
                    description: 'Music events'
                },
                {
                    categoryId: 4,
                    name: t('sports'),
                    description: 'Sports events'
                },
                {
                    categoryId: 5,
                    name: t('education'),
                    description: 'Educational events'
                }
            ]);
            setVenues([
                {
                    venueId: 1,
                    name: 'KLCC Convention Center',
                    address: 'Kuala Lumpur City Centre',
                    city: 'Kuala Lumpur',
                    capacity: 1000
                },
                {
                    venueId: 2,
                    name: 'Sunway Convention Centre',
                    address: 'Bandar Sunway',
                    city: 'Petaling Jaya',
                    capacity: 800
                },
                {
                    venueId: 3,
                    name: 'Mid Valley Exhibition Centre',
                    address: 'Mid Valley City',
                    city: 'Kuala Lumpur',
                    capacity: 500
                }
            ]);
        }
    };
    const handleInputChange = (e)=>{
        const { name, value, type } = e.target;
        const checked = e.target.checked;
        setFormData((prev)=>({
                ...prev,
                [name]: type === 'checkbox' ? checked : value
            }));
        // Clear error when field is updated
        if (formErrors[name]) {
            setFormErrors((prev)=>({
                    ...prev,
                    [name]: ''
                }));
        }
    };
    const handleTicketTypeChange = (index, field, value)=>{
        setTicketTypes((prev)=>prev.map((ticket, i)=>i === index ? {
                    ...ticket,
                    [field]: value
                } : ticket));
    };
    const addTicketType = ()=>{
        setTicketTypes((prev)=>[
                ...prev,
                {
                    name: '',
                    price: 0,
                    quantity: 0,
                    description: '',
                    isActive: true
                }
            ]);
    };
    const removeTicketType = (index)=>{
        if (ticketTypes.length > 1) {
            setTicketTypes((prev)=>prev.filter((_, i)=>i !== index));
        }
    };
    // Helper function to check if event spans multiple days
    const isMultiDayEvent = ()=>{
        if (!formData.eventDate || !formData.endDate) return false;
        const start = new Date(formData.eventDate);
        const end = new Date(formData.endDate);
        return start.toDateString() !== end.toDateString();
    };
    // Helper function to calculate event duration
    const getEventDuration = ()=>{
        if (!formData.eventDate || !formData.endDate) return null;
        const start = new Date(formData.eventDate);
        const end = new Date(formData.endDate);
        const diffInMs = end.getTime() - start.getTime();
        const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
        return diffInDays > 0 ? diffInDays : null;
    };
    const validateForm = ()=>{
        const errors = {};
        if (!formData.title.trim()) {
            errors.title = t('eventTitleRequired');
        }
        if (!formData.description.trim()) {
            errors.description = t('descriptionRequired');
        }
        if (!formData.eventDate) {
            errors.eventDate = t('startDateTimeRequired');
        }
        // Validate end date if provided
        if (formData.endDate && formData.eventDate) {
            const start = new Date(formData.eventDate);
            const end = new Date(formData.endDate);
            if (end <= start) {
                errors.endDate = t('endDateAfterStart');
            }
        }
        if (!formData.categoryId) {
            errors.categoryId = t('categoryRequired');
        }
        if (!formData.isOnline && !formData.venueId) {
            errors.venueId = t('venueRequired');
        }
        if (!formData.maxCapacity || parseInt(formData.maxCapacity) <= 0) {
            errors.maxCapacity = t('maxCapacityRequired');
        }
        // Validate registration deadline
        if (formData.registrationDeadline && formData.eventDate) {
            const regDeadline = new Date(formData.registrationDeadline);
            const eventStart = new Date(formData.eventDate);
            if (regDeadline >= eventStart) {
                errors.registrationDeadline = t('registrationDeadlineBeforeEvent');
            }
        }
        // Validate ticket types
        ticketTypes.forEach((ticket, index)=>{
            if (!ticket.name.trim()) {
                errors[`ticketName_${index}`] = t('ticketTypeNameRequired');
            }
            if (ticket.quantity <= 0) {
                errors[`ticketQuantity_${index}`] = t('quantityGreaterThanZero');
            }
        });
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };
    // Updated ticket creation payload to match your DTO
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!validateForm()) {
            setError(t('fixErrorsBelow'));
            return;
        }
        setLoading(true);
        setError('');
        setSuccess('');
        try {
            // Format dates properly for API
            const formatDateForApi = (dateString)=>{
                if (!dateString) return null;
                const date = new Date(dateString);
                return date.toISOString();
            };
            // Prepare event data
            const eventPayload = {
                title: formData.title.trim(),
                description: formData.description.trim(),
                shortDescription: null,
                startDateTime: formatDateForApi(formData.eventDate),
                endDateTime: formData.endDate ? formatDateForApi(formData.endDate) : null,
                categoryId: parseInt(formData.categoryId),
                venueId: formData.isOnline ? null : formData.venueId ? parseInt(formData.venueId.toString()) : null,
                imageUrl: formData.imageUrl || null,
                bannerImageUrl: null,
                tags: null,
                maxAttendees: parseInt(formData.maxCapacity),
                basePrice: 0,
                currency: "USD",
                isOnline: formData.isOnline,
                onlineUrl: formData.isOnline ? formData.location : null,
                isPublished: formData.isPublished,
                registrationDeadline: formData.registrationDeadline ? formatDateForApi(formData.registrationDeadline) : null
            };
            console.log('Creating event with payload:', eventPayload);
            // Create event
            const eventResponse = await fetch('http://localhost:5251/api/events', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                },
                body: JSON.stringify(eventPayload)
            });
            if (!eventResponse.ok) {
                const errorData = await eventResponse.json();
                console.error('Event creation failed:', errorData);
                throw new Error(errorData.message || t('failedToCreateEvent'));
            }
            const createdEvent = await eventResponse.json();
            console.log('Event created successfully:', createdEvent);
            // Create ticket types with corrected payload structure
            const ticketCreationResults = [];
            let failedTickets = 0;
            for (const [index, ticketType] of ticketTypes.entries()){
                try {
                    // Fixed payload to match CreateTicketTypeDto
                    const ticketPayload = {
                        eventId: createdEvent.eventId,
                        name: ticketType.name.trim(),
                        description: ticketType.description?.trim() || null,
                        price: Number(ticketType.price),
                        quantityAvailable: Number(ticketType.quantity),
                        saleStartDate: null,
                        saleEndDate: null,
                        minQuantityPerOrder: 1,
                        maxQuantityPerOrder: Math.min(10, Number(ticketType.quantity)),
                        sortOrder: index
                    };
                    // Validate the payload before sending
                    if (!ticketPayload.name) {
                        throw new Error(`Ticket ${index + 1}: ${t('ticketTypeNameRequired')}`);
                    }
                    if (ticketPayload.price < 0) {
                        throw new Error(`Ticket ${index + 1}: ${t('priceRequired')}`);
                    }
                    if (ticketPayload.quantityAvailable <= 0) {
                        throw new Error(`Ticket ${index + 1}: ${t('quantityGreaterThanZero')}`);
                    }
                    console.log(`Creating ticket type ${index + 1} with corrected payload:`, ticketPayload);
                    const ticketResponse = await fetch('http://localhost:5251/api/tickets/ticket-types', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                        },
                        body: JSON.stringify(ticketPayload)
                    });
                    console.log(`Ticket ${index + 1} response status:`, ticketResponse.status);
                    if (!ticketResponse.ok) {
                        const ticketErrorText = await ticketResponse.text();
                        console.error(`Failed to create ticket type ${index + 1}:`, ticketErrorText);
                        let ticketError;
                        try {
                            ticketError = JSON.parse(ticketErrorText);
                        } catch  {
                            ticketError = {
                                message: ticketErrorText
                            };
                        }
                        console.error(`Ticket ${index + 1} error details:`, ticketError);
                        failedTickets++;
                        // Log the specific validation errors if available
                        if (ticketError.errors) {
                            console.error(`Ticket ${index + 1} validation errors:`, ticketError.errors);
                        }
                    } else {
                        const createdTicketType = await ticketResponse.json();
                        console.log(`Ticket type ${index + 1} created successfully:`, createdTicketType);
                        ticketCreationResults.push(createdTicketType);
                    }
                } catch (ticketError) {
                    console.error(`Error creating ticket type ${index + 1}:`, ticketError);
                    failedTickets++;
                }
            }
            // Show appropriate success message
            if (failedTickets === 0) {
                setSuccess(t('eventCreatedSuccessfully'));
            } else if (failedTickets < ticketTypes.length) {
                setSuccess(t('eventCreatedSuccessfully'));
            } else {
                setSuccess(t('eventCreatedSuccessfully'));
            }
            // Redirect after a delay
            setTimeout(()=>{
                router.push('/organizer/dashboard');
            }, 3000);
        } catch (error) {
            console.error('Error in event creation process:', error);
            setError(error instanceof Error ? error.message : t('failedToCreateEvent'));
        } finally{
            setLoading(false);
        }
    };
    if (!user || !isOrganizer) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `min-h-screen ${themeClasses.background} flex items-center justify-center`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"
                    }, void 0, false, {
                        fileName: "[project]/src/app/organizer/events/create/page.tsx",
                        lineNumber: 451,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `mt-4 ${themeClasses.textMuted}`,
                        children: t('loading')
                    }, void 0, false, {
                        fileName: "[project]/src/app/organizer/events/create/page.tsx",
                        lineNumber: 452,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/organizer/events/create/page.tsx",
                lineNumber: 450,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/organizer/events/create/page.tsx",
            lineNumber: 449,
            columnNumber: 13
        }, this);
    }
    const eventDuration = getEventDuration();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `min-h-screen ${themeClasses.background}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>router.back(),
                            className: `flex items-center ${themeClasses.textMuted} hover:${themeClasses.text} mb-4`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    className: "h-4 w-4 mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                    lineNumber: 469,
                                    columnNumber: 25
                                }, this),
                                t('back')
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                            lineNumber: 465,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: `text-3xl font-bold ${themeClasses.text}`,
                            children: t('createNewEvent')
                        }, void 0, false, {
                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                            lineNumber: 472,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: `${themeClasses.textMuted} mt-1`,
                            children: t('fillEventDetails')
                        }, void 0, false, {
                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                            lineNumber: 473,
                            columnNumber: 21
                        }, this),
                        eventDuration && eventDuration > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                    className: "h-4 w-4 mr-1"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                    lineNumber: 478,
                                    columnNumber: 29
                                }, this),
                                t('dayEvent', {
                                    count: eventDuration
                                })
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                            lineNumber: 477,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/organizer/events/create/page.tsx",
                    lineNumber: 464,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${themeClasses.card} rounded-lg shadow-sm ${themeClasses.border} border`,
                    children: [
                        success && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 bg-green-50 dark:bg-green-900/20 border-b border-green-200 dark:border-green-800",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "h-5 w-5 text-green-400",
                                            viewBox: "0 0 20 20",
                                            fill: "currentColor",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                fillRule: "evenodd",
                                                d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                                clipRule: "evenodd"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                lineNumber: 491,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                            lineNumber: 490,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                        lineNumber: 489,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ml-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-green-700 dark:text-green-300",
                                            children: success
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                            lineNumber: 495,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                        lineNumber: 494,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                lineNumber: 488,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                            lineNumber: 487,
                            columnNumber: 25
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 bg-red-50 dark:bg-red-900/20 border-b border-red-200 dark:border-red-800",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                        className: "h-5 w-5 text-red-400 flex-shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                        lineNumber: 504,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ml-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-red-700 dark:text-red-400",
                                            children: error
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                            lineNumber: 506,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                        lineNumber: 505,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                lineNumber: 503,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                            lineNumber: 502,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            className: "p-6 space-y-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: `text-lg font-semibold ${themeClasses.text} mb-4`,
                                            children: t('basicInformation')
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                            lineNumber: 515,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "md:col-span-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: `block text-sm font-medium ${themeClasses.text} mb-2`,
                                                            children: [
                                                                t('eventTitle'),
                                                                " *"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                            lineNumber: 518,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            name: "title",
                                                            value: formData.title,
                                                            onChange: handleInputChange,
                                                            className: `w-full px-4 py-2 ${themeClasses.card} ${themeClasses.border} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${themeClasses.text} ${formErrors.title ? 'border-red-500' : ''}`,
                                                            placeholder: t('enterEventTitle')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                            lineNumber: 521,
                                                            columnNumber: 37
                                                        }, this),
                                                        formErrors.title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-red-500 text-sm mt-1",
                                                            children: formErrors.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                            lineNumber: 529,
                                                            columnNumber: 58
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                    lineNumber: 517,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "md:col-span-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: `block text-sm font-medium ${themeClasses.text} mb-2`,
                                                            children: [
                                                                t('eventDescription'),
                                                                " *"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                            lineNumber: 533,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                            name: "description",
                                                            value: formData.description,
                                                            onChange: handleInputChange,
                                                            rows: 4,
                                                            className: `w-full px-4 py-2 ${themeClasses.card} ${themeClasses.border} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${themeClasses.text} ${formErrors.description ? 'border-red-500' : ''}`,
                                                            placeholder: t('describeEventDetail')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                            lineNumber: 536,
                                                            columnNumber: 37
                                                        }, this),
                                                        formErrors.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-red-500 text-sm mt-1",
                                                            children: formErrors.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                            lineNumber: 544,
                                                            columnNumber: 64
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                    lineNumber: 532,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: `block text-sm font-medium ${themeClasses.text} mb-2`,
                                                            children: [
                                                                t('category'),
                                                                " *"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                            lineNumber: 548,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            name: "categoryId",
                                                            value: formData.categoryId,
                                                            onChange: handleInputChange,
                                                            className: `w-full px-4 py-2 ${themeClasses.card} ${themeClasses.border} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${themeClasses.text} ${formErrors.categoryId ? 'border-red-500' : ''}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "",
                                                                    className: themeClasses.textMuted,
                                                                    children: t('selectCategory')
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                                    lineNumber: 557,
                                                                    columnNumber: 41
                                                                }, this),
                                                                categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: category.categoryId,
                                                                        className: themeClasses.text,
                                                                        children: category.name
                                                                    }, category.categoryId, false, {
                                                                        fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                                        lineNumber: 559,
                                                                        columnNumber: 45
                                                                    }, this))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                            lineNumber: 551,
                                                            columnNumber: 37
                                                        }, this),
                                                        formErrors.categoryId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-red-500 text-sm mt-1",
                                                            children: formErrors.categoryId
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                            lineNumber: 564,
                                                            columnNumber: 63
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                    lineNumber: 547,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: `block text-sm font-medium ${themeClasses.text} mb-2`,
                                                            children: [
                                                                t('maxCapacity'),
                                                                " *"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                            lineNumber: 568,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            name: "maxCapacity",
                                                            value: formData.maxCapacity,
                                                            onChange: handleInputChange,
                                                            min: "1",
                                                            className: `w-full px-4 py-2 ${themeClasses.card} ${themeClasses.border} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${themeClasses.text} ${formErrors.maxCapacity ? 'border-red-500' : ''}`,
                                                            placeholder: t('maximumAttendees')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                            lineNumber: 571,
                                                            columnNumber: 37
                                                        }, this),
                                                        formErrors.maxCapacity && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-red-500 text-sm mt-1",
                                                            children: formErrors.maxCapacity
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                            lineNumber: 580,
                                                            columnNumber: 64
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                    lineNumber: 567,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "md:col-span-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: `block text-sm font-medium ${themeClasses.text} mb-2`,
                                                            children: t('eventImageUrl')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                            lineNumber: 584,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "url",
                                                            name: "imageUrl",
                                                            value: formData.imageUrl,
                                                            onChange: handleInputChange,
                                                            className: `w-full px-4 py-2 ${themeClasses.card} ${themeClasses.border} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${themeClasses.text}`,
                                                            placeholder: t('enterImageUrl')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                            lineNumber: 587,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                    lineNumber: 583,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                            lineNumber: 516,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                    lineNumber: 514,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: `text-lg font-semibold ${themeClasses.text} mb-4`,
                                            children: t('dateTime')
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                            lineNumber: 601,
                                            columnNumber: 29
                                        }, this),
                                        formData.eventDate && formData.endDate && isMultiDayEvent() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                        className: "h-4 w-4 text-blue-600 dark:text-blue-400 mr-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                        lineNumber: 607,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-blue-700 dark:text-blue-300 font-medium",
                                                        children: t('multiDayEvent', {
                                                            count: eventDuration
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                        lineNumber: 608,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                lineNumber: 606,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                            lineNumber: 605,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: `block text-sm font-medium ${themeClasses.text} mb-2`,
                                                            children: [
                                                                t('startDateTime'),
                                                                " *"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                            lineNumber: 617,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "datetime-local",
                                                            name: "eventDate",
                                                            value: formData.eventDate,
                                                            onChange: handleInputChange,
                                                            className: `w-full px-4 py-2 ${themeClasses.card} ${themeClasses.border} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${themeClasses.text} ${formErrors.eventDate ? 'border-red-500' : ''}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                            lineNumber: 620,
                                                            columnNumber: 37
                                                        }, this),
                                                        formErrors.eventDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-red-500 text-sm mt-1",
                                                            children: formErrors.eventDate
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                            lineNumber: 627,
                                                            columnNumber: 62
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                    lineNumber: 616,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: `block text-sm font-medium ${themeClasses.text} mb-2`,
                                                            children: t('endDateTime')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                            lineNumber: 631,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "datetime-local",
                                                            name: "endDate",
                                                            value: formData.endDate,
                                                            onChange: handleInputChange,
                                                            className: `w-full px-4 py-2 ${themeClasses.card} ${themeClasses.border} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${themeClasses.text} ${formErrors.endDate ? 'border-red-500' : ''}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                            lineNumber: 634,
                                                            columnNumber: 37
                                                        }, this),
                                                        formErrors.endDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-red-500 text-sm mt-1",
                                                            children: formErrors.endDate
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                            lineNumber: 641,
                                                            columnNumber: 60
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: `text-xs ${themeClasses.textMuted} mt-1`,
                                                            children: t('leaveEmptySingleSession')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                            lineNumber: 642,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                    lineNumber: 630,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "md:col-span-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: `block text-sm font-medium ${themeClasses.text} mb-2`,
                                                            children: t('registrationDeadline')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                            lineNumber: 648,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "datetime-local",
                                                            name: "registrationDeadline",
                                                            value: formData.registrationDeadline,
                                                            onChange: handleInputChange,
                                                            className: `w-full px-4 py-2 ${themeClasses.card} ${themeClasses.border} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${themeClasses.text} ${formErrors.registrationDeadline ? 'border-red-500' : ''}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                            lineNumber: 651,
                                                            columnNumber: 37
                                                        }, this),
                                                        formErrors.registrationDeadline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-red-500 text-sm mt-1",
                                                            children: formErrors.registrationDeadline
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                            lineNumber: 658,
                                                            columnNumber: 73
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: `text-xs ${themeClasses.textMuted} mt-1`,
                                                            children: t('whenRegistrationClose')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                            lineNumber: 659,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                    lineNumber: 647,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                            lineNumber: 615,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                    lineNumber: 600,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: `text-lg font-semibold ${themeClasses.text} mb-4`,
                                            children: t('location')
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                            lineNumber: 668,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            name: "isOnline",
                                                            checked: formData.isOnline,
                                                            onChange: handleInputChange,
                                                            className: "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                            lineNumber: 671,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: `ml-2 text-sm ${themeClasses.text}`,
                                                            children: t('onlineEvent')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                            lineNumber: 678,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                    lineNumber: 670,
                                                    columnNumber: 33
                                                }, this),
                                                !formData.isOnline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: `block text-sm font-medium ${themeClasses.text} mb-2`,
                                                            children: [
                                                                t('venue'),
                                                                " *"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                            lineNumber: 685,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            name: "venueId",
                                                            value: formData.venueId || '',
                                                            onChange: handleInputChange,
                                                            className: `w-full px-4 py-2 ${themeClasses.card} ${themeClasses.border} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${themeClasses.text} ${formErrors.venueId ? 'border-red-500' : ''}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "",
                                                                    className: themeClasses.textMuted,
                                                                    children: t('selectVenue')
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                                    lineNumber: 694,
                                                                    columnNumber: 45
                                                                }, this),
                                                                venues.map((venue)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: venue.venueId,
                                                                        className: themeClasses.text,
                                                                        children: t('venueWithCapacity', {
                                                                            name: venue.name,
                                                                            city: venue.city,
                                                                            capacity: venue.capacity
                                                                        })
                                                                    }, venue.venueId, false, {
                                                                        fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                                        lineNumber: 696,
                                                                        columnNumber: 49
                                                                    }, this))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                            lineNumber: 688,
                                                            columnNumber: 41
                                                        }, this),
                                                        formErrors.venueId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-red-500 text-sm mt-1",
                                                            children: formErrors.venueId
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                            lineNumber: 701,
                                                            columnNumber: 64
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                    lineNumber: 684,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: `block text-sm font-medium ${themeClasses.text} mb-2`,
                                                            children: t('locationDetails')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                            lineNumber: 706,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            name: "location",
                                                            value: formData.location,
                                                            onChange: handleInputChange,
                                                            className: `w-full px-4 py-2 ${themeClasses.card} ${themeClasses.border} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${themeClasses.text}`,
                                                            placeholder: formData.isOnline ? t('meetingLinkPlatform') : t('additionalLocationInfo')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                            lineNumber: 709,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                    lineNumber: 705,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                            lineNumber: 669,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                    lineNumber: 667,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: `text-lg font-semibold ${themeClasses.text}`,
                                                    children: t('ticketTypes')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                    lineNumber: 724,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: addTicketType,
                                                    className: "flex items-center px-3 py-2 text-sm bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                            className: "h-4 w-4 mr-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                            lineNumber: 730,
                                                            columnNumber: 37
                                                        }, this),
                                                        t('addTicketType')
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                    lineNumber: 725,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                            lineNumber: 723,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: ticketTypes.map((ticket, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `p-4 ${themeClasses.border} border rounded-lg`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-start mb-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: `text-md font-medium ${themeClasses.text}`,
                                                                    children: [
                                                                        t('ticketTypeName'),
                                                                        " ",
                                                                        index + 1
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                                    lineNumber: 739,
                                                                    columnNumber: 45
                                                                }, this),
                                                                ticketTypes.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>removeTicketType(index),
                                                                    className: "text-red-600 hover:text-red-800",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                        className: "h-4 w-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                                        lineNumber: 748,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                                    lineNumber: 743,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                            lineNumber: 738,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: `block text-sm font-medium ${themeClasses.text} mb-2`,
                                                                            children: [
                                                                                t('ticketTypeName'),
                                                                                " *"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                                            lineNumber: 755,
                                                                            columnNumber: 49
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "text",
                                                                            value: ticket.name,
                                                                            onChange: (e)=>handleTicketTypeChange(index, 'name', e.target.value),
                                                                            className: `w-full px-3 py-2 ${themeClasses.card} ${themeClasses.border} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${themeClasses.text} ${formErrors[`ticketName_${index}`] ? 'border-red-500' : ''}`,
                                                                            placeholder: "e.g., General Admission"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                                            lineNumber: 758,
                                                                            columnNumber: 49
                                                                        }, this),
                                                                        formErrors[`ticketName_${index}`] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-red-500 text-sm mt-1",
                                                                            children: formErrors[`ticketName_${index}`]
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                                            lineNumber: 766,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                                    lineNumber: 754,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: `block text-sm font-medium ${themeClasses.text} mb-2`,
                                                                            children: t('price')
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                                            lineNumber: 771,
                                                                            columnNumber: 49
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "number",
                                                                            value: ticket.price,
                                                                            onChange: (e)=>handleTicketTypeChange(index, 'price', parseFloat(e.target.value) || 0),
                                                                            min: "0",
                                                                            step: "0.01",
                                                                            className: `w-full px-3 py-2 ${themeClasses.card} ${themeClasses.border} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${themeClasses.text}`,
                                                                            placeholder: "0.00"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                                            lineNumber: 774,
                                                                            columnNumber: 49
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                                    lineNumber: 770,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: `block text-sm font-medium ${themeClasses.text} mb-2`,
                                                                            children: [
                                                                                t('quantity'),
                                                                                " *"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                                            lineNumber: 786,
                                                                            columnNumber: 49
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "number",
                                                                            value: ticket.quantity,
                                                                            onChange: (e)=>handleTicketTypeChange(index, 'quantity', parseInt(e.target.value) || 0),
                                                                            min: "1",
                                                                            className: `w-full px-3 py-2 ${themeClasses.card} ${themeClasses.border} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${themeClasses.text} ${formErrors[`ticketQuantity_${index}`] ? 'border-red-500' : ''}`,
                                                                            placeholder: "100"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                                            lineNumber: 789,
                                                                            columnNumber: 49
                                                                        }, this),
                                                                        formErrors[`ticketQuantity_${index}`] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-red-500 text-sm mt-1",
                                                                            children: formErrors[`ticketQuantity_${index}`]
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                                            lineNumber: 798,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                                    lineNumber: 785,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "md:col-span-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: `block text-sm font-medium ${themeClasses.text} mb-2`,
                                                                            children: t('ticketDescription')
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                                            lineNumber: 803,
                                                                            columnNumber: 49
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                            value: ticket.description,
                                                                            onChange: (e)=>handleTicketTypeChange(index, 'description', e.target.value),
                                                                            rows: 2,
                                                                            className: `w-full px-3 py-2 ${themeClasses.card} ${themeClasses.border} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${themeClasses.text}`,
                                                                            placeholder: t('optionalTicketDescription')
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                                            lineNumber: 806,
                                                                            columnNumber: 49
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                                    lineNumber: 802,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "md:col-span-3",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "checkbox",
                                                                                checked: ticket.isActive,
                                                                                onChange: (e)=>handleTicketTypeChange(index, 'isActive', e.target.checked),
                                                                                className: "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                                                lineNumber: 817,
                                                                                columnNumber: 53
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: `ml-2 text-sm ${themeClasses.text}`,
                                                                                children: t('ticketActive')
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                                                lineNumber: 823,
                                                                                columnNumber: 53
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                                        lineNumber: 816,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                                    lineNumber: 815,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                            lineNumber: 753,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                    lineNumber: 737,
                                                    columnNumber: 37
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                            lineNumber: 735,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                    lineNumber: 722,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: `text-lg font-semibold ${themeClasses.text} mb-4`,
                                            children: t('publishingOptions')
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                            lineNumber: 836,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    name: "isPublished",
                                                    checked: formData.isPublished,
                                                    onChange: handleInputChange,
                                                    className: "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                    lineNumber: 838,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: `ml-2 text-sm ${themeClasses.text}`,
                                                    children: t('publishEventImmediately')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                    lineNumber: 845,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                            lineNumber: 837,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `text-xs ${themeClasses.textMuted} mt-1`,
                                            children: t('publishUnpublishLater')
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                            lineNumber: 849,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                    lineNumber: 835,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `flex justify-end space-x-4 pt-6 border-t ${themeClasses.border}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>router.back(),
                                            className: `px-6 py-2 ${themeClasses.border} border ${themeClasses.text} rounded-lg ${themeClasses.hover} transition-colors`,
                                            disabled: loading,
                                            children: t('cancel')
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                            lineNumber: 856,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: loading,
                                            className: "flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                                            children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                        lineNumber: 871,
                                                        columnNumber: 41
                                                    }, this),
                                                    t('creatingEvent')
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                        className: "h-4 w-4 mr-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                                        lineNumber: 876,
                                                        columnNumber: 41
                                                    }, this),
                                                    t('createEvent')
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                            lineNumber: 864,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/organizer/events/create/page.tsx",
                                    lineNumber: 855,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/organizer/events/create/page.tsx",
                            lineNumber: 512,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/organizer/events/create/page.tsx",
                    lineNumber: 484,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/organizer/events/create/page.tsx",
            lineNumber: 462,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/organizer/events/create/page.tsx",
        lineNumber: 461,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = CreateEventPage;
}}),

};

//# sourceMappingURL=src_app_organizer_events_create_page_tsx_ecf7e15e._.js.map