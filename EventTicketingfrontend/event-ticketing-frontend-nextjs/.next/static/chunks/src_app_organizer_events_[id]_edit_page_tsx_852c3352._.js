(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/organizer/events/[id]/edit/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* eslint-disable @typescript-eslint/no-explicit-any */ /* eslint-disable @typescript-eslint/no-unused-vars */ __turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useAuth.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$providers$2f$I18nProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/providers/I18nProvider.tsx [app-client] (ecmascript)"); // Add this import
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-client] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTheme$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useTheme.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
const EditEventPage = ()=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const eventId = params?.id;
    const { user, isOrganizer } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$providers$2f$I18nProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"])(); // Add this hook
    const themeClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTheme$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeClasses"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [initialLoading, setInitialLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [venues, setVenues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [ticketTypes, setTicketTypes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Ticket editing state
    const [showCreateTicketForm, setShowCreateTicketForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showEditTicketForm, setShowEditTicketForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingTicketType, setEditingTicketType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [ticketFormLoading, setTicketFormLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Image handling state - add after your existing state declarations
    const [bannerFile, setBannerFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [imageFile, setImageFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [bannerPreview, setBannerPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [imagePreview, setImagePreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [deleteBanner, setDeleteBanner] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deleteImage, setDeleteImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [imageUploadLoading, setImageUploadLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Form state
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
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
    const [createTicketData, setCreateTicketData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        description: '',
        price: '',
        quantityAvailable: '',
        saleStartDate: '',
        saleEndDate: '',
        minQuantityPerOrder: '1',
        maxQuantityPerOrder: '10',
        sortOrder: '0'
    });
    const [editTicketData, setEditTicketData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        ticketTypeId: 0,
        name: '',
        description: '',
        price: '',
        quantityAvailable: '',
        saleStartDate: '',
        saleEndDate: '',
        minQuantityPerOrder: '1',
        maxQuantityPerOrder: '10',
        sortOrder: '0'
    });
    const [formErrors, setFormErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [ticketFormErrors, setTicketFormErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [showImageModal, setShowImageModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [modalImageSrc, setModalImageSrc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const openImageModal = (src)=>{
        setModalImageSrc(src);
        setShowImageModal(true);
    };
    const ImagePreviewModal = ()=>showImageModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative max-w-4xl max-h-4xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: modalImageSrc,
                        alt: t('imagePreview'),
                        className: "max-w-full max-h-full object-contain"
                    }, void 0, false, {
                        fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                        lineNumber: 170,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowImageModal(false),
                        className: "absolute top-4 right-4 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "h-6 w-6"
                        }, void 0, false, {
                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                            lineNumber: 179,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                        lineNumber: 175,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                lineNumber: 169,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
            lineNumber: 168,
            columnNumber: 13
        }, this);
    // Load event data and initial data
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditEventPage.useEffect": ()=>{
            if (user && isOrganizer && eventId) {
                loadEventData();
                fetchInitialData();
            } else if (user && !isOrganizer) {
                router.push('/');
            }
        }
    }["EditEventPage.useEffect"], [
        user,
        isOrganizer,
        eventId,
        router
    ]);
    const loadEventData = async ()=>{
        try {
            setInitialLoading(true);
            setError('');
            // Fetch event details using your API
            const response = await fetch(`http://localhost:5251/api/events/${eventId}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                }
            });
            if (!response.ok) {
                if (response.status === 404) {
                    setError(t('loadError'));
                    return;
                }
                throw new Error(t('loadError'));
            }
            const eventData = await response.json();
            console.log('Loaded event data:', eventData);
            // Helper function to format date for datetime-local input
            const formatDateForInput = (dateValue)=>{
                if (!dateValue) return '';
                try {
                    const date = new Date(dateValue);
                    if (isNaN(date.getTime())) return '';
                    // Format to YYYY-MM-DDTHH:MM for datetime-local input
                    const year = date.getFullYear();
                    const month = String(date.getMonth() + 1).padStart(2, '0');
                    const day = String(date.getDate()).padStart(2, '0');
                    const hours = String(date.getHours()).padStart(2, '0');
                    const minutes = String(date.getMinutes()).padStart(2, '0');
                    return `${year}-${month}-${day}T${hours}:${minutes}`;
                } catch (error) {
                    console.error('Error formatting date:', error);
                    return '';
                }
            };
            // In your loadEventData function, after setting formData:
            setFormData({
                title: eventData.title || '',
                description: eventData.description || '',
                eventDate: formatDateForInput(eventData.startDateTime || eventData.eventDate),
                endDate: formatDateForInput(eventData.endDateTime),
                location: eventData.location || '',
                isOnline: eventData.isOnline || false,
                maxCapacity: eventData.maxAttendees?.toString() || '',
                categoryId: eventData.categoryId?.toString() || '',
                venueId: eventData.venueId || null,
                imageUrl: eventData.imageUrl || '',
                registrationDeadline: formatDateForInput(eventData.registrationDeadline),
                isPublished: eventData.isPublished || false
            });
            // Fetch ticket types for this event
            await fetchTicketTypes();
        } catch (error) {
            console.error('Error loading event data:', error);
            setError(t('loadError'));
        } finally{
            setInitialLoading(false);
        }
    };
    const handleDragOver = (e)=>{
        e.preventDefault();
        setIsDragging(true);
    };
    const handleDragLeave = (e)=>{
        e.preventDefault();
        setIsDragging(false);
    };
    const handleDrop = async (e, type)=>{
        e.preventDefault();
        setIsDragging(false);
        const files = Array.from(e.dataTransfer.files);
        const imageFile = files.find((file)=>file.type.startsWith('image/'));
        if (imageFile) {
            if (type === 'banner') {
                await handleBannerFileChange({
                    target: {
                        files: [
                            imageFile
                        ]
                    }
                });
            } else {
                await handleImageFileChange({
                    target: {
                        files: [
                            imageFile
                        ]
                    }
                });
            }
        } else {
            setError(t('invalidImageFile'));
        }
    };
    const handleBannerFileChange = async (e)=>{
        const file = e.target.files?.[0];
        if (file) {
            setError(''); // Clear previous errors
            const validation = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["imageApi"].validateImageFile(file);
            if (!validation.isValid) {
                setError(t('invalidImageFile') + ': ' + (validation.error || t('imageUploadFailed')));
                return;
            }
            try {
                setImageUploadLoading(true); // Show loading state during preview generation
                setBannerFile(file);
                const preview = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["imageUtils"].resizeImageForPreview(file, 800, 400);
                setBannerPreview(preview);
                setDeleteBanner(false);
                // Show success message for file selection
                setSuccess(t('imageUploadSuccess'));
                setTimeout(()=>setSuccess(''), 2000);
            } catch (error) {
                setError(t('imageProcessing') + ' ' + t('imageUploadFailed'));
            } finally{
                setImageUploadLoading(false);
            }
        }
    };
    const handleImageFileChange = async (e)=>{
        const file = e.target.files?.[0];
        if (file) {
            setError(''); // Clear previous errors
            const validation = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["imageApi"].validateImageFile(file);
            if (!validation.isValid) {
                setError(t('invalidImageFile') + ': ' + (validation.error || t('imageUploadFailed')));
                return;
            }
            try {
                setImageUploadLoading(true); // Show loading state during preview generation
                setImageFile(file);
                const preview = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["imageUtils"].resizeImageForPreview(file, 400, 300);
                setImagePreview(preview);
                setDeleteImage(false);
                // Show success message for file selection
                setSuccess(t('imageUploadSuccess'));
                setTimeout(()=>setSuccess(''), 2000);
            } catch (error) {
                setError(t('imageProcessing') + ' ' + t('imageUploadFailed'));
            } finally{
                setImageUploadLoading(false);
            }
        }
    };
    const handleDeleteBanner = ()=>{
        setBannerFile(null);
        setBannerPreview('');
        setDeleteBanner(true);
        const bannerInput = document.getElementById('banner-upload');
        if (bannerInput) bannerInput.value = '';
    };
    const handleDeleteImage = ()=>{
        setImageFile(null);
        setImagePreview('');
        setDeleteImage(true);
        const imageInput = document.getElementById('image-upload');
        if (imageInput) imageInput.value = '';
    };
    const fetchTicketTypes = async ()=>{
        try {
            const response = await fetch(`http://localhost:5251/api/tickets/event/${eventId}/ticket-types`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                }
            });
            if (response.ok) {
                const ticketTypesData = await response.json();
                console.log('Loaded ticket types:', ticketTypesData);
                // Map API response to local format with smart editing fields
                const mappedTicketTypes = ticketTypesData.map((tt)=>({
                        ticketTypeId: tt.ticketTypeId,
                        name: tt.name,
                        price: tt.price,
                        quantityAvailable: tt.quantityAvailable || tt.quantity,
                        quantitySold: tt.quantitySold || 0,
                        description: tt.description || '',
                        isActive: tt.isActive,
                        isEventPublished: tt.isEventPublished,
                        eventStatus: tt.eventStatus,
                        saleStartDate: tt.saleStartDate,
                        saleEndDate: tt.saleEndDate,
                        minQuantityPerOrder: tt.minQuantityPerOrder || 1,
                        maxQuantityPerOrder: tt.maxQuantityPerOrder || 10,
                        sortOrder: tt.sortOrder || 0
                    }));
                setTicketTypes(mappedTicketTypes);
            }
        } catch (error) {
            console.error('Error fetching ticket types:', error);
            setTicketTypes([]);
        }
    };
    const fetchInitialData = async ()=>{
        try {
            // Fetch categories
            const categoriesResponse = await fetch('http://localhost:5251/api/categories', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                }
            });
            if (categoriesResponse.ok) {
                const categoriesData = await categoriesResponse.json();
                setCategories(categoriesData);
            }
            // Fetch venues
            const venuesResponse = await fetch('http://localhost:5251/api/venues', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                }
            });
            if (venuesResponse.ok) {
                const venuesData = await venuesResponse.json();
                setVenues(venuesData);
            }
        } catch (error) {
            console.error('Error fetching initial data:', error);
        }
    };
    // Smart editing logic for ticket types
    const canEditTicketType = (ticketType)=>{
        // Check if event is published
        if (ticketType.isEventPublished) {
            return {
                canEdit: false,
                reason: t('salesDataIntegrity')
            };
        }
        // Check if tickets have been sold
        const ticketsSold = ticketType.quantitySold || 0;
        if (ticketsSold > 0) {
            return {
                canEdit: false,
                reason: t('ticketsSoldCount', {
                    count: ticketsSold
                })
            };
        }
        // Check if event is in draft status
        if (ticketType.eventStatus && ticketType.eventStatus.toLowerCase() !== 'draft') {
            return {
                canEdit: false,
                reason: t('eventStatusNotDraft')
            };
        }
        return {
            canEdit: true,
            reason: t('safeToEdit')
        };
    };
    const ImageDropZone = ({ type, preview, currentImage, onFileSelect, onDelete, children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `relative ${isDragging ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : ''}`,
            onDragOver: handleDragOver,
            onDragLeave: handleDragLeave,
            onDrop: (e)=>handleDrop(e, type),
            children: [
                children,
                isDragging && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 border-2 border-dashed border-blue-500 bg-blue-50/50 dark:bg-blue-900/20 flex items-center justify-center rounded-lg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-blue-700 dark:text-blue-300 font-medium",
                        children: t('dropImageHere')
                    }, void 0, false, {
                        fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                        lineNumber: 501,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                    lineNumber: 500,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
            lineNumber: 492,
            columnNumber: 9
        }, this);
    const getEditingStatus = (ticketType)=>{
        const { canEdit, reason } = canEditTicketType(ticketType);
        const ticketsSold = ticketType.quantitySold || 0;
        if (!canEdit) {
            return {
                status: 'locked',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"],
                color: 'text-red-600',
                bgColor: 'bg-red-50 dark:bg-red-900/20',
                borderColor: 'border-red-200 dark:border-red-800',
                reason: reason
            };
        }
        return {
            status: 'editable',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"],
            color: 'text-green-600',
            bgColor: 'bg-green-50 dark:bg-green-900/20',
            borderColor: 'border-green-200 dark:border-green-800',
            reason: t('safeToEdit')
        };
    };
    const canCreateTicketTypes = ()=>{
        // Check if event is published
        if (formData.isPublished) {
            return {
                canCreate: false,
                reason: t('salesDataIntegrity')
            };
        }
        // Check if any tickets have been sold
        const totalTicketsSold = ticketTypes.reduce((sum, tt)=>sum + (tt.quantitySold || 0), 0);
        if (totalTicketsSold > 0) {
            return {
                canCreate: false,
                reason: t('cannotCreateTicketTypes', {
                    count: totalTicketsSold
                })
            };
        }
        return {
            canCreate: true,
            reason: t('safeToEdit')
        };
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
    const handleCreateTicketInputChange = (e)=>{
        const { name, value } = e.target;
        setCreateTicketData((prev)=>({
                ...prev,
                [name]: value
            }));
        if (ticketFormErrors[name]) {
            setTicketFormErrors((prev)=>({
                    ...prev,
                    [name]: ''
                }));
        }
    };
    const handleEditTicketInputChange = (e)=>{
        const { name, value } = e.target;
        setEditTicketData((prev)=>({
                ...prev,
                [name]: value
            }));
        if (ticketFormErrors[name]) {
            setTicketFormErrors((prev)=>({
                    ...prev,
                    [name]: ''
                }));
        }
    };
    const validateTicketForm = (data)=>{
        const errors = {};
        if (!data.name.trim()) errors.name = t('ticketTypeNameRequired');
        if (!data.price || parseFloat(data.price) < 0) errors.price = t('priceRequired');
        if (!data.quantityAvailable || parseInt(data.quantityAvailable) <= 0) errors.quantityAvailable = t('quantityGreaterThanZero');
        setTicketFormErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const openCreateTicketForm = ()=>{
        const { canCreate, reason } = canCreateTicketTypes();
        if (!canCreate) {
            setError(reason);
            return;
        }
        setCreateTicketData({
            name: '',
            description: '',
            price: '',
            quantityAvailable: '',
            saleStartDate: '',
            saleEndDate: '',
            minQuantityPerOrder: '1',
            maxQuantityPerOrder: '10',
            sortOrder: '0'
        });
        setShowCreateTicketForm(true);
    };
    const openEditTicketForm = (ticketType)=>{
        const { canEdit, reason } = canEditTicketType(ticketType);
        if (!canEdit) {
            setError(reason);
            return;
        }
        setEditingTicketType(ticketType);
        setEditTicketData({
            ticketTypeId: ticketType.ticketTypeId,
            name: ticketType.name,
            description: ticketType.description,
            price: ticketType.price.toString(),
            quantityAvailable: ticketType.quantityAvailable.toString(),
            saleStartDate: ticketType.saleStartDate || '',
            saleEndDate: ticketType.saleEndDate || '',
            minQuantityPerOrder: (ticketType.minQuantityPerOrder || 1).toString(),
            maxQuantityPerOrder: (ticketType.maxQuantityPerOrder || 10).toString(),
            sortOrder: (ticketType.sortOrder || 0).toString()
        });
        setShowEditTicketForm(true);
    };
    const handleCreateTicketType = async (e)=>{
        e.preventDefault();
        if (!validateTicketForm(createTicketData)) return;
        setTicketFormLoading(true);
        setError('');
        try {
            const payload = {
                eventId: parseInt(eventId),
                name: createTicketData.name.trim(),
                description: createTicketData.description.trim() || null,
                price: parseFloat(createTicketData.price),
                quantityAvailable: parseInt(createTicketData.quantityAvailable),
                saleStartDate: createTicketData.saleStartDate || null,
                saleEndDate: createTicketData.saleEndDate || null,
                minQuantityPerOrder: parseInt(createTicketData.minQuantityPerOrder),
                maxQuantityPerOrder: parseInt(createTicketData.maxQuantityPerOrder),
                sortOrder: parseInt(createTicketData.sortOrder)
            };
            const response = await fetch('http://localhost:5251/api/tickets/ticket-types', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                },
                body: JSON.stringify(payload)
            });
            if (response.ok) {
                setSuccess(t('ticketTypeCreatedSuccessfully'));
                await fetchTicketTypes();
                setShowCreateTicketForm(false);
                setTimeout(()=>setSuccess(''), 3000);
            } else {
                const errorData = await response.json();
                setError(errorData.message || t('failedToCreateTicketType'));
            }
        } catch (error) {
            setError(t('loadError'));
        } finally{
            setTicketFormLoading(false);
        }
    };
    const handleUpdateTicketType = async (e)=>{
        e.preventDefault();
        if (!validateTicketForm(editTicketData)) return;
        setTicketFormLoading(true);
        setError('');
        try {
            const payload = {
                name: editTicketData.name.trim(),
                description: editTicketData.description.trim() || null,
                price: parseFloat(editTicketData.price),
                quantityAvailable: parseInt(editTicketData.quantityAvailable),
                saleStartDate: editTicketData.saleStartDate || null,
                saleEndDate: editTicketData.saleEndDate || null,
                minQuantityPerOrder: parseInt(editTicketData.minQuantityPerOrder),
                maxQuantityPerOrder: parseInt(editTicketData.maxQuantityPerOrder),
                sortOrder: parseInt(editTicketData.sortOrder)
            };
            const response = await fetch(`http://localhost:5251/api/tickets/ticket-types/${editTicketData.ticketTypeId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                },
                body: JSON.stringify(payload)
            });
            if (response.ok) {
                setSuccess(t('ticketTypeUpdatedSuccessfully'));
                await fetchTicketTypes();
                setShowEditTicketForm(false);
                setEditingTicketType(null);
                setTimeout(()=>setSuccess(''), 3000);
            } else {
                const errorData = await response.json();
                setError(errorData.message || t('failedToUpdateTicketType'));
            }
        } catch (error) {
            setError(t('loadError'));
        } finally{
            setTicketFormLoading(false);
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
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!validateForm()) {
            setError(t('fixErrorsBelow'));
            return;
        }
        setLoading(true);
        setImageUploadLoading(true);
        setError('');
        setSuccess('');
        try {
            const eventPayload = {
                title: formData.title,
                description: formData.description,
                shortDescription: undefined,
                startDateTime: formData.eventDate,
                endDateTime: formData.endDate || undefined,
                categoryId: parseInt(formData.categoryId),
                venueId: formData.isOnline ? undefined : parseInt(formData.venueId?.toString() || '0'),
                imageUrl: formData.imageUrl || undefined,
                bannerImageUrl: undefined,
                tags: undefined,
                maxAttendees: parseInt(formData.maxCapacity),
                basePrice: 0,
                currency: "USD",
                isOnline: formData.isOnline,
                onlineUrl: undefined // Changed from null to undefined
            };
            console.log('Updating event with images:', eventPayload);
            // Enhanced error handling for image uploads
            try {
                const updatedEvent = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eventsApi"].updateEventWithImages(parseInt(eventId), eventPayload, bannerFile || undefined, imageFile || undefined, deleteBanner, deleteImage);
                console.log('Event updated successfully:', updatedEvent);
                setSuccess(t('eventUpdatedSuccessfully'));
                setTimeout(()=>{
                    router.push(`/organizer/events`);
                }, 2000);
            } catch (imageError) {
                // Handle specific image upload errors
                if (imageError.message.includes('banner')) {
                    setError(t('bannerImage') + ' ' + t('imageUploadFailed') + ': ' + imageError.message);
                } else if (imageError.message.includes('image')) {
                    setError(t('eventImage') + ' ' + t('imageUploadFailed') + ': ' + imageError.message);
                } else {
                    setError(t('imageUploadFailed') + ': ' + imageError.message);
                }
            }
        } catch (error) {
            console.error('Error updating event:', error);
            setError(error instanceof Error ? error.message : t('failedToUpdateEvent'));
        } finally{
            setLoading(false);
            setImageUploadLoading(false);
        }
    };
    if (!user || !isOrganizer) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `min-h-screen ${themeClasses.background} flex items-center justify-center`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"
                    }, void 0, false, {
                        fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                        lineNumber: 891,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `mt-4 ${themeClasses.textMuted}`,
                        children: t('loading')
                    }, void 0, false, {
                        fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                        lineNumber: 892,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                lineNumber: 890,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
            lineNumber: 889,
            columnNumber: 13
        }, this);
    }
    ;
    if (initialLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `min-h-screen ${themeClasses.background} flex items-center justify-center`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"
                    }, void 0, false, {
                        fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                        lineNumber: 902,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `mt-4 ${themeClasses.textMuted}`,
                        children: t('loading')
                    }, void 0, false, {
                        fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                        lineNumber: 903,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                lineNumber: 901,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
            lineNumber: 900,
            columnNumber: 13
        }, this);
    }
    ;
    const eventDuration = getEventDuration();
    const { canCreate } = canCreateTicketTypes();
    const editableTickets = ticketTypes.filter((tt)=>canEditTicketType(tt).canEdit).length;
    const lockedTickets = ticketTypes.length - editableTickets;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `min-h-screen ${themeClasses.background}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>router.back(),
                            className: `flex items-center ${themeClasses.textMuted} hover:${themeClasses.text} mb-4`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    className: "h-4 w-4 mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                    lineNumber: 923,
                                    columnNumber: 25
                                }, this),
                                t('back'),
                                " to ",
                                t('events')
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                            lineNumber: 919,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: `text-3xl font-bold ${themeClasses.text}`,
                            children: t('editEvent')
                        }, void 0, false, {
                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                            lineNumber: 926,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: `${themeClasses.textMuted} mt-1`,
                            children: t('updateEventDetails')
                        }, void 0, false, {
                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                            lineNumber: 927,
                            columnNumber: 21
                        }, this),
                        eventDuration && eventDuration > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                    className: "h-4 w-4 mr-1"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                    lineNumber: 932,
                                    columnNumber: 29
                                }, this),
                                t('dayEvent', {
                                    count: eventDuration
                                })
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                            lineNumber: 931,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                    lineNumber: 918,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${themeClasses.card} rounded-lg shadow-sm ${themeClasses.border} border`,
                    children: [
                        success && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 bg-green-50 dark:bg-green-900/20 border-b border-green-200 dark:border-green-800",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "h-5 w-5 text-green-400",
                                            viewBox: "0 0 20 20",
                                            fill: "currentColor",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                fillRule: "evenodd",
                                                d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                                clipRule: "evenodd"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                lineNumber: 945,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                            lineNumber: 944,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                        lineNumber: 943,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ml-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-green-700 dark:text-green-300",
                                            children: success
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                            lineNumber: 949,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                        lineNumber: 948,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                lineNumber: 942,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                            lineNumber: 941,
                            columnNumber: 25
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 bg-red-50 dark:bg-red-900/20 border-b border-red-200 dark:border-red-800",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                        className: "h-5 w-5 text-red-400 flex-shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                        lineNumber: 958,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ml-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-red-700 dark:text-red-400",
                                            children: error
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                            lineNumber: 960,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                        lineNumber: 959,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                lineNumber: 957,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                            lineNumber: 956,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            className: "p-6 space-y-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: `text-lg font-semibold ${themeClasses.text} mb-4`,
                                            children: t('basicInformation')
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                            lineNumber: 969,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "md:col-span-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: `block text-sm font-medium ${themeClasses.text} mb-2`,
                                                            children: [
                                                                t('eventTitle'),
                                                                " *"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                            lineNumber: 972,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            name: "title",
                                                            value: formData.title,
                                                            onChange: handleInputChange,
                                                            className: `w-full px-4 py-2 ${themeClasses.card} ${themeClasses.border} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${themeClasses.text} ${formErrors.title ? 'border-red-500' : ''}`,
                                                            placeholder: t('enterEventTitle')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                            lineNumber: 975,
                                                            columnNumber: 37
                                                        }, this),
                                                        formErrors.title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-red-500 text-sm mt-1",
                                                            children: formErrors.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                            lineNumber: 983,
                                                            columnNumber: 58
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                    lineNumber: 971,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "md:col-span-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: `block text-sm font-medium ${themeClasses.text} mb-2`,
                                                            children: [
                                                                t('eventDescription'),
                                                                " *"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                            lineNumber: 987,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                            name: "description",
                                                            value: formData.description,
                                                            onChange: handleInputChange,
                                                            rows: 4,
                                                            className: `w-full px-4 py-2 ${themeClasses.card} ${themeClasses.border} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${themeClasses.text} ${formErrors.description ? 'border-red-500' : ''}`,
                                                            placeholder: t('describeEventDetail')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                            lineNumber: 990,
                                                            columnNumber: 37
                                                        }, this),
                                                        formErrors.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-red-500 text-sm mt-1",
                                                            children: formErrors.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                            lineNumber: 998,
                                                            columnNumber: 64
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                    lineNumber: 986,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: `block text-sm font-medium ${themeClasses.text} mb-2`,
                                                            children: [
                                                                t('category'),
                                                                " *"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                            lineNumber: 1002,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            name: "categoryId",
                                                            value: formData.categoryId,
                                                            onChange: handleInputChange,
                                                            className: `w-full px-4 py-2 ${themeClasses.card} ${themeClasses.border} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${themeClasses.text} ${formErrors.categoryId ? 'border-red-500' : ''}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "",
                                                                    className: themeClasses.textMuted,
                                                                    children: t('selectCategory')
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                    lineNumber: 1011,
                                                                    columnNumber: 41
                                                                }, this),
                                                                categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: category.categoryId,
                                                                        className: themeClasses.text,
                                                                        children: category.name
                                                                    }, category.categoryId, false, {
                                                                        fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                        lineNumber: 1013,
                                                                        columnNumber: 45
                                                                    }, this))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                            lineNumber: 1005,
                                                            columnNumber: 37
                                                        }, this),
                                                        formErrors.categoryId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-red-500 text-sm mt-1",
                                                            children: formErrors.categoryId
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                            lineNumber: 1018,
                                                            columnNumber: 63
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                    lineNumber: 1001,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: `block text-sm font-medium ${themeClasses.text} mb-2`,
                                                            children: [
                                                                t('maxCapacity'),
                                                                " *"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                            lineNumber: 1022,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            name: "maxCapacity",
                                                            value: formData.maxCapacity,
                                                            onChange: handleInputChange,
                                                            min: "1",
                                                            className: `w-full px-4 py-2 ${themeClasses.card} ${themeClasses.border} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${themeClasses.text} ${formErrors.maxCapacity ? 'border-red-500' : ''}`,
                                                            placeholder: t('maximumAttendees')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                            lineNumber: 1025,
                                                            columnNumber: 37
                                                        }, this),
                                                        formErrors.maxCapacity && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-red-500 text-sm mt-1",
                                                            children: formErrors.maxCapacity
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                            lineNumber: 1034,
                                                            columnNumber: 64
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                    lineNumber: 1021,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                            lineNumber: 970,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                    lineNumber: 968,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: `text-lg font-semibold ${themeClasses.text} mb-4`,
                                            children: t('eventImages')
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                            lineNumber: 1041,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: `block text-sm font-medium ${themeClasses.text} mb-2`,
                                                            children: t('bannerImage')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                            lineNumber: 1045,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: `text-xs ${themeClasses.textMuted} mb-3`,
                                                            children: t('bannerImageDescription')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                            lineNumber: 1048,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mb-4",
                                                            children: bannerPreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "relative",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                        src: bannerPreview,
                                                                        alt: t('imagePreview'),
                                                                        className: "w-full h-48 object-cover rounded-lg border"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                        lineNumber: 1055,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: handleDeleteBanner,
                                                                        className: "absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600",
                                                                        title: t('removeImage'),
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                            className: "h-4 w-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                            lineNumber: 1066,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                        lineNumber: 1060,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                lineNumber: 1054,
                                                                columnNumber: 45
                                                            }, this) : formData.imageUrl && !deleteBanner ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "relative",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["imageUtils"].getImageWithFallback(formData.imageUrl, 'event-banner'),
                                                                        alt: t('bannerImage'),
                                                                        className: "w-full h-48 object-cover rounded-lg border"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                        lineNumber: 1071,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: handleDeleteBanner,
                                                                        className: "absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600",
                                                                        title: t('removeImage'),
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                            className: "h-4 w-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                            lineNumber: 1082,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                        lineNumber: 1076,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                lineNumber: 1070,
                                                                columnNumber: 45
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `w-full h-48 ${themeClasses.border} border-2 border-dashed rounded-lg flex items-center justify-center ${themeClasses.textMuted}`,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-center",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                                                            className: "h-12 w-12 mx-auto mb-2"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                            lineNumber: 1088,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            children: t('noBannerImage')
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                            lineNumber: 1089,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                    lineNumber: 1087,
                                                                    columnNumber: 49
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                lineNumber: 1086,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                            lineNumber: 1052,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            id: "banner-upload",
                                                            type: "file",
                                                            accept: "image/*",
                                                            onChange: handleBannerFileChange,
                                                            className: "hidden",
                                                            "aria-label": t('selectImageFile')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                            lineNumber: 1095,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>document.getElementById('banner-upload')?.click(),
                                                            className: `flex items-center px-4 py-2 ${themeClasses.border} border rounded-lg ${themeClasses.text} ${themeClasses.hover} transition-colors`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                    className: "h-4 w-4 mr-2"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                    lineNumber: 1108,
                                                                    columnNumber: 41
                                                                }, this),
                                                                bannerPreview || formData.imageUrl ? t('changeBanner') : t('uploadBanner')
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                            lineNumber: 1103,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                    lineNumber: 1044,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: `block text-sm font-medium ${themeClasses.text} mb-2`,
                                                            children: t('eventImage')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                            lineNumber: 1115,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: `text-xs ${themeClasses.textMuted} mb-3`,
                                                            children: t('eventImageDescription')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                            lineNumber: 1118,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mb-4",
                                                            children: imagePreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "relative inline-block",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                        src: imagePreview,
                                                                        alt: t('imagePreview'),
                                                                        className: "w-64 h-48 object-cover rounded-lg border"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                        lineNumber: 1125,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: handleDeleteImage,
                                                                        className: "absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600",
                                                                        title: t('removeImage'),
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                            className: "h-4 w-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                            lineNumber: 1136,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                        lineNumber: 1130,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                lineNumber: 1124,
                                                                columnNumber: 45
                                                            }, this) : formData.imageUrl && !deleteImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "relative inline-block",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["imageUtils"].getImageWithFallback(formData.imageUrl, 'event-image'),
                                                                        alt: t('eventImage'),
                                                                        className: "w-64 h-48 object-cover rounded-lg border"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                        lineNumber: 1141,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: handleDeleteImage,
                                                                        className: "absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600",
                                                                        title: t('removeImage'),
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                            className: "h-4 w-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                            lineNumber: 1152,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                        lineNumber: 1146,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                lineNumber: 1140,
                                                                columnNumber: 45
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `w-64 h-48 ${themeClasses.border} border-2 border-dashed rounded-lg flex items-center justify-center ${themeClasses.textMuted}`,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-center",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                            className: "h-8 w-8 mx-auto mb-2"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                            lineNumber: 1158,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm",
                                                                            children: t('noEventImage')
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                            lineNumber: 1159,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                    lineNumber: 1157,
                                                                    columnNumber: 49
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                lineNumber: 1156,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                            lineNumber: 1122,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            id: "image-upload",
                                                            type: "file",
                                                            accept: "image/*",
                                                            onChange: handleImageFileChange,
                                                            className: "hidden",
                                                            "aria-label": t('selectImageFile')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                            lineNumber: 1165,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>document.getElementById('image-upload')?.click(),
                                                            className: `flex items-center px-4 py-2 ${themeClasses.border} border rounded-lg ${themeClasses.text} ${themeClasses.hover} transition-colors`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                    className: "h-4 w-4 mr-2"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                    lineNumber: 1178,
                                                                    columnNumber: 41
                                                                }, this),
                                                                imagePreview || formData.imageUrl ? t('changeImage') : t('uploadImage')
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                            lineNumber: 1173,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                    lineNumber: 1114,
                                                    columnNumber: 33
                                                }, this),
                                                imageUploadLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                lineNumber: 1187,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm text-blue-700 dark:text-blue-300",
                                                                children: t('uploadingImages')
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                lineNumber: 1188,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                        lineNumber: 1186,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                    lineNumber: 1185,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-4 bg-gray-50 dark:bg-gray-900/20 border border-gray-200 dark:border-gray-800 rounded-lg",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: `text-sm font-medium ${themeClasses.text} mb-2`,
                                                            children: t('imageGuidelines')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                            lineNumber: 1195,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: `text-xs ${themeClasses.textMuted} space-y-1`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: [
                                                                        "• ",
                                                                        t('supportedFormats'),
                                                                        ": JPEG, PNG, WebP, GIF"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                    lineNumber: 1197,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: [
                                                                        "• ",
                                                                        t('maxFileSize'),
                                                                        ": 5MB"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                    lineNumber: 1198,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: [
                                                                        "• ",
                                                                        t('bannerRecommended'),
                                                                        ": 1200x400px (3:1 ratio)"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                    lineNumber: 1199,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: [
                                                                        "• ",
                                                                        t('imageRecommended'),
                                                                        ": 400x300px (4:3 ratio)"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                    lineNumber: 1200,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                            lineNumber: 1196,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                    lineNumber: 1194,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                            lineNumber: 1043,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                    lineNumber: 1040,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: `text-lg font-semibold ${themeClasses.text} mb-4`,
                                            children: t('dateTime')
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                            lineNumber: 1209,
                                            columnNumber: 29
                                        }, this),
                                        formData.eventDate && formData.endDate && isMultiDayEvent() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                        className: "h-4 w-4 text-blue-600 dark:text-blue-400 mr-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                        lineNumber: 1215,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-blue-700 dark:text-blue-300 font-medium",
                                                        children: t('multiDayEvent', {
                                                            count: eventDuration
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                        lineNumber: 1216,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                lineNumber: 1214,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                            lineNumber: 1213,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: `block text-sm font-medium ${themeClasses.text} mb-2`,
                                                            children: [
                                                                t('startDateTime'),
                                                                " *"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                            lineNumber: 1225,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "datetime-local",
                                                            name: "eventDate",
                                                            value: formData.eventDate,
                                                            onChange: handleInputChange,
                                                            className: `w-full px-4 py-2 ${themeClasses.card} ${themeClasses.border} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${themeClasses.text} ${formErrors.eventDate ? 'border-red-500' : ''}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                            lineNumber: 1228,
                                                            columnNumber: 37
                                                        }, this),
                                                        formErrors.eventDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-red-500 text-sm mt-1",
                                                            children: formErrors.eventDate
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                            lineNumber: 1235,
                                                            columnNumber: 62
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                    lineNumber: 1224,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: `block text-sm font-medium ${themeClasses.text} mb-2`,
                                                            children: t('endDateTime')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                            lineNumber: 1239,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "datetime-local",
                                                            name: "endDate",
                                                            value: formData.endDate,
                                                            onChange: handleInputChange,
                                                            className: `w-full px-4 py-2 ${themeClasses.card} ${themeClasses.border} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${themeClasses.text} ${formErrors.endDate ? 'border-red-500' : ''}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                            lineNumber: 1242,
                                                            columnNumber: 37
                                                        }, this),
                                                        formErrors.endDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-red-500 text-sm mt-1",
                                                            children: formErrors.endDate
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                            lineNumber: 1249,
                                                            columnNumber: 60
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: `text-xs ${themeClasses.textMuted} mt-1`,
                                                            children: t('leaveEmptySingleSession')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                            lineNumber: 1250,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                    lineNumber: 1238,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "md:col-span-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: `block text-sm font-medium ${themeClasses.text} mb-2`,
                                                            children: t('registrationDeadline')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                            lineNumber: 1256,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "datetime-local",
                                                            name: "registrationDeadline",
                                                            value: formData.registrationDeadline,
                                                            onChange: handleInputChange,
                                                            className: `w-full px-4 py-2 ${themeClasses.card} ${themeClasses.border} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${themeClasses.text} ${formErrors.registrationDeadline ? 'border-red-500' : ''}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                            lineNumber: 1259,
                                                            columnNumber: 37
                                                        }, this),
                                                        formErrors.registrationDeadline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-red-500 text-sm mt-1",
                                                            children: formErrors.registrationDeadline
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                            lineNumber: 1266,
                                                            columnNumber: 73
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: `text-xs ${themeClasses.textMuted} mt-1`,
                                                            children: t('whenRegistrationClose')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                            lineNumber: 1267,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                    lineNumber: 1255,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                            lineNumber: 1223,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                    lineNumber: 1208,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: `text-lg font-semibold ${themeClasses.text} mb-4`,
                                            children: t('location')
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                            lineNumber: 1276,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            name: "isOnline",
                                                            checked: formData.isOnline,
                                                            onChange: handleInputChange,
                                                            className: "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                            lineNumber: 1279,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: `ml-2 text-sm ${themeClasses.text}`,
                                                            children: t('onlineEvent')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                            lineNumber: 1286,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                    lineNumber: 1278,
                                                    columnNumber: 33
                                                }, this),
                                                !formData.isOnline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: `block text-sm font-medium ${themeClasses.text} mb-2`,
                                                            children: [
                                                                t('venue'),
                                                                " *"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                            lineNumber: 1293,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            name: "venueId",
                                                            value: formData.venueId || '',
                                                            onChange: handleInputChange,
                                                            className: `w-full px-4 py-2 ${themeClasses.card} ${themeClasses.border} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${themeClasses.text} ${formErrors.venueId ? 'border-red-500' : ''}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "",
                                                                    className: themeClasses.textMuted,
                                                                    children: t('selectVenue')
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                    lineNumber: 1302,
                                                                    columnNumber: 45
                                                                }, this),
                                                                venues.map((venue)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: venue.venueId,
                                                                        className: themeClasses.text,
                                                                        children: t('venueWithCapacity', {
                                                                            name: venue.name,
                                                                            city: venue.city,
                                                                            capacity: venue.capacity
                                                                        })
                                                                    }, venue.venueId, false, {
                                                                        fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                        lineNumber: 1304,
                                                                        columnNumber: 49
                                                                    }, this))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                            lineNumber: 1296,
                                                            columnNumber: 41
                                                        }, this),
                                                        formErrors.venueId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-red-500 text-sm mt-1",
                                                            children: formErrors.venueId
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                            lineNumber: 1309,
                                                            columnNumber: 64
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                    lineNumber: 1292,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: `block text-sm font-medium ${themeClasses.text} mb-2`,
                                                            children: t('locationDetails')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                            lineNumber: 1314,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            name: "location",
                                                            value: formData.location,
                                                            onChange: handleInputChange,
                                                            className: `w-full px-4 py-2 ${themeClasses.card} ${themeClasses.border} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${themeClasses.text}`,
                                                            placeholder: formData.isOnline ? t('meetingLinkPlatform') : t('additionalLocationInfo')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                            lineNumber: 1317,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                    lineNumber: 1313,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                            lineNumber: 1277,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                    lineNumber: 1275,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: `text-lg font-semibold ${themeClasses.text}`,
                                                    children: t('ticketTypes')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                    lineNumber: 1332,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: openCreateTicketForm,
                                                    disabled: !canCreate,
                                                    className: `flex items-center px-4 py-2 rounded-lg text-sm transition-colors ${canCreate ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`,
                                                    title: canCreate ? t('addTicketType') : t('cannotCreateTicketTypes'),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                            className: "h-4 w-4 mr-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                            lineNumber: 1343,
                                                            columnNumber: 37
                                                        }, this),
                                                        t('addTicketType')
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                    lineNumber: 1333,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                            lineNumber: 1331,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-sm font-medium text-blue-800 dark:text-blue-200 mb-2",
                                                    children: t('smartTicketEditing')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                    lineNumber: 1350,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-blue-700 dark:text-blue-300",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-medium mb-1",
                                                                    children: t('whenCanEdit')
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                    lineNumber: 1353,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                    className: "space-y-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: t('eventDraftStatus')
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                            lineNumber: 1355,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: t('noTicketsSold')
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                            lineNumber: 1356,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: t('eventNotPublished')
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                            lineNumber: 1357,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                    lineNumber: 1354,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                            lineNumber: 1352,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-medium mb-1",
                                                                    children: t('whenEditingLocked')
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                    lineNumber: 1361,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                    className: "space-y-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: t('eventIsPublished')
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                            lineNumber: 1363,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: t('ticketsAlreadySold')
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                            lineNumber: 1364,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            children: t('eventStatusNotDraft')
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                            lineNumber: 1365,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                    lineNumber: 1362,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                            lineNumber: 1360,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                    lineNumber: 1351,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                            lineNumber: 1349,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-3 gap-4 mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${themeClasses.card} p-4 rounded-lg ${themeClasses.border} border`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `text-2xl font-bold ${themeClasses.text}`,
                                                            children: ticketTypes.length
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                            lineNumber: 1374,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `text-sm ${themeClasses.textMuted}`,
                                                            children: t('totalTypes')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                            lineNumber: 1375,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                    lineNumber: 1373,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${themeClasses.card} p-4 rounded-lg border-green-200 dark:border-green-800 border`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-2xl font-bold text-green-600 dark:text-green-400",
                                                            children: editableTickets
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                            lineNumber: 1378,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `text-sm ${themeClasses.textMuted}`,
                                                            children: t('editable')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                            lineNumber: 1379,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                    lineNumber: 1377,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${themeClasses.card} p-4 rounded-lg border-red-200 dark:border-red-800 border`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-2xl font-bold text-red-600 dark:text-red-400",
                                                            children: lockedTickets
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                            lineNumber: 1382,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `text-sm ${themeClasses.textMuted}`,
                                                            children: t('locked')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                            lineNumber: 1383,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                    lineNumber: 1381,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                            lineNumber: 1372,
                                            columnNumber: 29
                                        }, this),
                                        ticketTypes.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `text-center py-8 ${themeClasses.border} border rounded-lg ${themeClasses.isDark ? 'bg-gray-800' : 'bg-gray-50'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                    className: `h-12 w-12 ${themeClasses.textMuted} mx-auto mb-4`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                    lineNumber: 1389,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: `text-lg font-medium ${themeClasses.text} mb-2`,
                                                    children: t('noTicketTypesYet')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                    lineNumber: 1390,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `${themeClasses.textMuted} mb-4`,
                                                    children: t('addTicketTypesToStart')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                    lineNumber: 1391,
                                                    columnNumber: 37
                                                }, this),
                                                canCreate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: openCreateTicketForm,
                                                    className: "inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                            className: "h-4 w-4 mr-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                            lineNumber: 1398,
                                                            columnNumber: 45
                                                        }, this),
                                                        t('createFirstTicketType')
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                    lineNumber: 1393,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                            lineNumber: 1388,
                                            columnNumber: 33
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: ticketTypes.map((ticket, index)=>{
                                                const editStatus = getEditingStatus(ticket);
                                                const { canEdit } = canEditTicketType(ticket);
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `p-6 ${themeClasses.border} border rounded-lg ${themeClasses.card}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-start",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center space-x-3 mb-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                className: `text-lg font-medium ${themeClasses.text}`,
                                                                                children: ticket.name || `${t('ticketTypeName')} ${index + 1}`
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                                lineNumber: 1414,
                                                                                columnNumber: 61
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: `px-2 py-1 rounded-full text-xs font-medium ${editStatus.bgColor} ${editStatus.borderColor} border`,
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex items-center",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(editStatus.icon, {
                                                                                            className: `h-3 w-3 ${editStatus.color} mr-1`
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                                            lineNumber: 1419,
                                                                                            columnNumber: 69
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: editStatus.color,
                                                                                            children: canEdit ? t('editable') : t('locked')
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                                            lineNumber: 1420,
                                                                                            columnNumber: 69
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                                    lineNumber: 1418,
                                                                                    columnNumber: 65
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                                lineNumber: 1417,
                                                                                columnNumber: 61
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                        lineNumber: 1413,
                                                                        columnNumber: 57
                                                                    }, this),
                                                                    ticket.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: `${themeClasses.textMuted} mb-4`,
                                                                        children: ticket.description
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                        lineNumber: 1428,
                                                                        columnNumber: 61
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: `font-medium ${themeClasses.textMuted}`,
                                                                                        children: [
                                                                                            t('price'),
                                                                                            ":"
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                                        lineNumber: 1433,
                                                                                        columnNumber: 65
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: `${themeClasses.text} font-medium`,
                                                                                        children: [
                                                                                            "RM ",
                                                                                            ticket.price
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                                        lineNumber: 1434,
                                                                                        columnNumber: 65
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                                lineNumber: 1432,
                                                                                columnNumber: 61
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: `font-medium ${themeClasses.textMuted}`,
                                                                                        children: [
                                                                                            t('quantity'),
                                                                                            ":"
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                                        lineNumber: 1437,
                                                                                        columnNumber: 65
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: themeClasses.text,
                                                                                        children: ticket.quantityAvailable
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                                        lineNumber: 1438,
                                                                                        columnNumber: 65
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                                lineNumber: 1436,
                                                                                columnNumber: 61
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: `font-medium ${themeClasses.textMuted}`,
                                                                                        children: [
                                                                                            t('ticketsSold'),
                                                                                            ":"
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                                        lineNumber: 1441,
                                                                                        columnNumber: 65
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: `font-medium ${ticket.quantitySold > 0 ? 'text-blue-600 dark:text-blue-400' : themeClasses.text}`,
                                                                                        children: ticket.quantitySold
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                                        lineNumber: 1442,
                                                                                        columnNumber: 65
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                                lineNumber: 1440,
                                                                                columnNumber: 61
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: `font-medium ${themeClasses.textMuted}`,
                                                                                        children: "Status:"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                                        lineNumber: 1447,
                                                                                        columnNumber: 65
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: themeClasses.text,
                                                                                        children: ticket.isActive ? 'Active' : 'Inactive'
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                                        lineNumber: 1448,
                                                                                        columnNumber: 65
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                                lineNumber: 1446,
                                                                                columnNumber: 61
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                        lineNumber: 1431,
                                                                        columnNumber: 57
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "mt-4",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: `w-full ${themeClasses.isDark ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2`,
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: `h-2 rounded-full ${ticket.quantitySold > 0 ? 'bg-blue-600' : 'bg-gray-400'}`,
                                                                                    style: {
                                                                                        width: `${ticket.quantitySold / ticket.quantityAvailable * 100}%`
                                                                                    }
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                                    lineNumber: 1455,
                                                                                    columnNumber: 65
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                                lineNumber: 1454,
                                                                                columnNumber: 61
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: `text-xs ${themeClasses.textMuted} mt-1`,
                                                                                children: [
                                                                                    ticket.quantityAvailable - ticket.quantitySold,
                                                                                    " remaining"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                                lineNumber: 1462,
                                                                                columnNumber: 61
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                        lineNumber: 1453,
                                                                        columnNumber: 57
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `mt-4 text-xs ${themeClasses.textMuted}`,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                children: "Edit Status:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                                lineNumber: 1469,
                                                                                columnNumber: 61
                                                                            }, this),
                                                                            " ",
                                                                            editStatus.reason
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                        lineNumber: 1468,
                                                                        columnNumber: 57
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                lineNumber: 1412,
                                                                columnNumber: 53
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "ml-4",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>openEditTicketForm(ticket),
                                                                    disabled: !canEdit,
                                                                    className: `p-2 rounded-lg transition-colors ${canEdit ? 'text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 cursor-pointer' : `${themeClasses.textMuted} cursor-not-allowed ${themeClasses.isDark ? 'bg-gray-800' : 'bg-gray-50'}`}`,
                                                                    title: canEdit ? t('editTicketType') : editStatus.reason,
                                                                    children: canEdit ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                                                        className: "h-5 w-5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                        lineNumber: 1484,
                                                                        columnNumber: 72
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                                        className: "h-5 w-5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                        lineNumber: 1484,
                                                                        columnNumber: 103
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                    lineNumber: 1474,
                                                                    columnNumber: 57
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                lineNumber: 1473,
                                                                columnNumber: 53
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                        lineNumber: 1411,
                                                        columnNumber: 49
                                                    }, this)
                                                }, ticket.ticketTypeId || index, false, {
                                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                    lineNumber: 1410,
                                                    columnNumber: 45
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                            lineNumber: 1404,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                    lineNumber: 1330,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: `text-lg font-semibold ${themeClasses.text} mb-4`,
                                            children: t('publishingOptions')
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                            lineNumber: 1497,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-yellow-700 dark:text-yellow-300",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Note:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                        lineNumber: 1500,
                                                        columnNumber: 37
                                                    }, this),
                                                    " ",
                                                    t('usePublishButtons')
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                lineNumber: 1499,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                            lineNumber: 1498,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    name: "isPublished",
                                                    checked: formData.isPublished,
                                                    onChange: handleInputChange,
                                                    className: "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded",
                                                    disabled: true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                    lineNumber: 1504,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: `ml-2 text-sm ${themeClasses.textMuted}`,
                                                    children: [
                                                        t('published'),
                                                        " (",
                                                        t('makeVisiblePublic'),
                                                        ") - ",
                                                        formData.isPublished ? t('currentlyPublished') : t('currentlyUnpublished')
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                    lineNumber: 1512,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                            lineNumber: 1503,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `text-xs ${themeClasses.textMuted} mt-1`,
                                            children: t('usePublishButtons')
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                            lineNumber: 1516,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                    lineNumber: 1496,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `flex justify-end space-x-4 pt-6 border-t ${themeClasses.border}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>router.back(),
                                            className: `px-6 py-2 ${themeClasses.border} border ${themeClasses.text} rounded-lg ${themeClasses.hover} transition-colors`,
                                            disabled: loading,
                                            children: t('cancel')
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                            lineNumber: 1523,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: loading,
                                            className: "flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                                            children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                        lineNumber: 1538,
                                                        columnNumber: 41
                                                    }, this),
                                                    t('updatingEvent')
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                        className: "h-4 w-4 mr-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                        lineNumber: 1543,
                                                        columnNumber: 41
                                                    }, this),
                                                    t('update'),
                                                    " ",
                                                    t('events')
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                            lineNumber: 1531,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                    lineNumber: 1522,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                            lineNumber: 966,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                    lineNumber: 938,
                    columnNumber: 17
                }, this),
                showCreateTicketForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${themeClasses.card} rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: `text-xl font-semibold ${themeClasses.text}`,
                                            children: t('createTicketType')
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                            lineNumber: 1558,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setShowCreateTicketForm(false),
                                            className: `${themeClasses.textMuted} hover:${themeClasses.text}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "h-6 w-6"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                lineNumber: 1563,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                            lineNumber: 1559,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                    lineNumber: 1557,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleCreateTicketType,
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: `block text-sm font-medium ${themeClasses.text} mb-2`,
                                                    children: [
                                                        t('ticketTypeName'),
                                                        " *"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                    lineNumber: 1569,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    name: "name",
                                                    value: createTicketData.name,
                                                    onChange: handleCreateTicketInputChange,
                                                    className: `w-full px-4 py-2 ${themeClasses.card} ${themeClasses.border} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${themeClasses.text} ${ticketFormErrors.name ? 'border-red-500' : ''}`,
                                                    placeholder: "e.g., General Admission, VIP, Early Bird"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                    lineNumber: 1572,
                                                    columnNumber: 41
                                                }, this),
                                                ticketFormErrors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-red-500 text-sm mt-1",
                                                    children: ticketFormErrors.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                    lineNumber: 1580,
                                                    columnNumber: 67
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                            lineNumber: 1568,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: `block text-sm font-medium ${themeClasses.text} mb-2`,
                                                    children: t('ticketDescription')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                    lineNumber: 1584,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    name: "description",
                                                    value: createTicketData.description,
                                                    onChange: handleCreateTicketInputChange,
                                                    rows: 3,
                                                    className: `w-full px-4 py-2 ${themeClasses.card} ${themeClasses.border} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${themeClasses.text}`,
                                                    placeholder: t('optionalTicketDescription')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                    lineNumber: 1587,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                            lineNumber: 1583,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: `block text-sm font-medium ${themeClasses.text} mb-2`,
                                                            children: [
                                                                t('price'),
                                                                " *"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                            lineNumber: 1599,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            name: "price",
                                                            value: createTicketData.price,
                                                            onChange: handleCreateTicketInputChange,
                                                            min: "0",
                                                            step: "0.01",
                                                            className: `w-full px-4 py-2 ${themeClasses.card} ${themeClasses.border} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${themeClasses.text} ${ticketFormErrors.price ? 'border-red-500' : ''}`,
                                                            placeholder: "0.00"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                            lineNumber: 1602,
                                                            columnNumber: 45
                                                        }, this),
                                                        ticketFormErrors.price && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-red-500 text-sm mt-1",
                                                            children: ticketFormErrors.price
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                            lineNumber: 1612,
                                                            columnNumber: 72
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                    lineNumber: 1598,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: `block text-sm font-medium ${themeClasses.text} mb-2`,
                                                            children: [
                                                                t('quantity'),
                                                                " *"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                            lineNumber: 1616,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            name: "quantityAvailable",
                                                            value: createTicketData.quantityAvailable,
                                                            onChange: handleCreateTicketInputChange,
                                                            min: "1",
                                                            className: `w-full px-4 py-2 ${themeClasses.card} ${themeClasses.border} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${themeClasses.text} ${ticketFormErrors.quantityAvailable ? 'border-red-500' : ''}`,
                                                            placeholder: t('quantity')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                            lineNumber: 1619,
                                                            columnNumber: 45
                                                        }, this),
                                                        ticketFormErrors.quantityAvailable && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-red-500 text-sm mt-1",
                                                            children: ticketFormErrors.quantityAvailable
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                            lineNumber: 1628,
                                                            columnNumber: 84
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                    lineNumber: 1615,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                            lineNumber: 1597,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `flex justify-end space-x-4 pt-6 border-t ${themeClasses.border}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setShowCreateTicketForm(false),
                                                    className: `px-6 py-2 ${themeClasses.border} border ${themeClasses.text} rounded-lg ${themeClasses.hover} transition-colors`,
                                                    children: t('cancel')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                    lineNumber: 1633,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "submit",
                                                    disabled: ticketFormLoading,
                                                    className: "flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                                                    children: ticketFormLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                lineNumber: 1647,
                                                                columnNumber: 53
                                                            }, this),
                                                            t('loading'),
                                                            "..."
                                                        ]
                                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                                className: "h-4 w-4 mr-2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                lineNumber: 1652,
                                                                columnNumber: 53
                                                            }, this),
                                                            t('createTicketType')
                                                        ]
                                                    }, void 0, true)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                    lineNumber: 1640,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                            lineNumber: 1632,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                    lineNumber: 1567,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                            lineNumber: 1556,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                        lineNumber: 1555,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                    lineNumber: 1554,
                    columnNumber: 21
                }, this),
                showEditTicketForm && editingTicketType && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${themeClasses.card} rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: `text-xl font-semibold ${themeClasses.text}`,
                                            children: t('editTicketType')
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                            lineNumber: 1670,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setShowEditTicketForm(false);
                                                setEditingTicketType(null);
                                            },
                                            className: `${themeClasses.textMuted} hover:${themeClasses.text}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "h-6 w-6"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                lineNumber: 1678,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                            lineNumber: 1671,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                    lineNumber: 1669,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: async (e)=>{
                                        e.preventDefault();
                                        try {
                                            await handleUpdateTicketType(e);
                                            // Redirect to events page after successful update
                                            window.location.href = 'http://localhost:3000/organizer/events';
                                        } catch (error) {
                                            // Handle error if needed - the form will show error messages
                                            console.error('Update failed:', error);
                                        }
                                    },
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-medium text-green-800 dark:text-green-200 mb-2",
                                                    children: [
                                                        "✅ ",
                                                        t('safeToEdit')
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                    lineNumber: 1695,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-green-700 dark:text-green-300",
                                                    children: [
                                                        t('safeToEdit'),
                                                        " - ",
                                                        t('noTicketsSold'),
                                                        " ",
                                                        t('eventDraftStatus'),
                                                        "."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                    lineNumber: 1696,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                            lineNumber: 1694,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: `block text-sm font-medium ${themeClasses.text} mb-2`,
                                                    children: [
                                                        t('ticketTypeName'),
                                                        " *"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                    lineNumber: 1702,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    name: "name",
                                                    value: editTicketData.name,
                                                    onChange: handleEditTicketInputChange,
                                                    className: `w-full px-4 py-2 ${themeClasses.card} ${themeClasses.border} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${themeClasses.text} ${ticketFormErrors.name ? 'border-red-500' : ''}`,
                                                    placeholder: "e.g., General Admission, VIP, Early Bird"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                    lineNumber: 1705,
                                                    columnNumber: 41
                                                }, this),
                                                ticketFormErrors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-red-500 text-sm mt-1",
                                                    children: ticketFormErrors.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                    lineNumber: 1713,
                                                    columnNumber: 67
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                            lineNumber: 1701,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: `block text-sm font-medium ${themeClasses.text} mb-2`,
                                                    children: t('ticketDescription')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                    lineNumber: 1717,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    name: "description",
                                                    value: editTicketData.description,
                                                    onChange: handleEditTicketInputChange,
                                                    rows: 3,
                                                    className: `w-full px-4 py-2 ${themeClasses.card} ${themeClasses.border} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${themeClasses.text}`,
                                                    placeholder: t('optionalTicketDescription')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                    lineNumber: 1720,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                            lineNumber: 1716,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: `block text-sm font-medium ${themeClasses.text} mb-2`,
                                                            children: [
                                                                t('price'),
                                                                " *"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                            lineNumber: 1732,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            name: "price",
                                                            value: editTicketData.price,
                                                            onChange: handleEditTicketInputChange,
                                                            min: "0",
                                                            step: "0.01",
                                                            className: `w-full px-4 py-2 ${themeClasses.card} ${themeClasses.border} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${themeClasses.text} ${ticketFormErrors.price ? 'border-red-500' : ''}`,
                                                            placeholder: "0.00"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                            lineNumber: 1735,
                                                            columnNumber: 45
                                                        }, this),
                                                        ticketFormErrors.price && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-red-500 text-sm mt-1",
                                                            children: ticketFormErrors.price
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                            lineNumber: 1745,
                                                            columnNumber: 72
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                    lineNumber: 1731,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: `block text-sm font-medium ${themeClasses.text} mb-2`,
                                                            children: [
                                                                t('quantity'),
                                                                " *"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                            lineNumber: 1749,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            name: "quantityAvailable",
                                                            value: editTicketData.quantityAvailable,
                                                            onChange: handleEditTicketInputChange,
                                                            min: "1",
                                                            className: `w-full px-4 py-2 ${themeClasses.card} ${themeClasses.border} border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${themeClasses.text} ${ticketFormErrors.quantityAvailable ? 'border-red-500' : ''}`,
                                                            placeholder: t('quantity')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                            lineNumber: 1752,
                                                            columnNumber: 45
                                                        }, this),
                                                        ticketFormErrors.quantityAvailable && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-red-500 text-sm mt-1",
                                                            children: ticketFormErrors.quantityAvailable
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                            lineNumber: 1761,
                                                            columnNumber: 84
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                    lineNumber: 1748,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                            lineNumber: 1730,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `flex justify-end space-x-4 pt-6 border-t ${themeClasses.border}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>{
                                                        setShowEditTicketForm(false);
                                                        setEditingTicketType(null);
                                                    },
                                                    className: `px-6 py-2 ${themeClasses.border} border ${themeClasses.text} rounded-lg ${themeClasses.hover} transition-colors`,
                                                    children: t('cancel')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                    lineNumber: 1766,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "submit",
                                                    disabled: ticketFormLoading,
                                                    className: "flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                                                    children: ticketFormLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                lineNumber: 1783,
                                                                columnNumber: 53
                                                            }, this),
                                                            t('loading'),
                                                            "..."
                                                        ]
                                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                                className: "h-4 w-4 mr-2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                                lineNumber: 1788,
                                                                columnNumber: 53
                                                            }, this),
                                                            t('updateTicketType')
                                                        ]
                                                    }, void 0, true)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                                    lineNumber: 1776,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                            lineNumber: 1765,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                                    lineNumber: 1682,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                            lineNumber: 1668,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                        lineNumber: 1667,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
                    lineNumber: 1666,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
            lineNumber: 916,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/organizer/events/[id]/edit/page.tsx",
        lineNumber: 915,
        columnNumber: 9
    }, this);
};
_s(EditEventPage, "WLGWT3ygIw+4Zv/ao6OuwDP/XeY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$providers$2f$I18nProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTheme$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeClasses"]
    ];
});
_c = EditEventPage;
const __TURBOPACK__default__export__ = EditEventPage;
var _c;
__turbopack_context__.k.register(_c, "EditEventPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_organizer_events_%5Bid%5D_edit_page_tsx_852c3352._.js.map