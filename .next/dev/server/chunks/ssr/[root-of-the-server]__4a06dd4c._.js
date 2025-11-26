module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/data/ports.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"id":"juneau","name":"Juneau","description":"Capital city gateway","tagline":"Whales, glaciers, and pure Alaska.","image":""},{"id":"skagway","name":"Skagway","description":"Gold rush frontier","tagline":"Trains, trails, and towering peaks.","image":""},{"id":"ketchikan","name":"Ketchikan","description":"Rainforest coast","tagline":"Totem poles and misty fjords.","image":""},{"id":"sitka","name":"Sitka","description":"Island wilderness","tagline":"Eagles, volcanoes, and ocean air.","image":""}]);}),
"[project]/data/operators.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"id":"alaskaexpeditions","name":"Alaska Expeditions","description":"Local guides offering glacier & wildlife trips.","ports":["juneau","skagway"],"fh_shortname":"alaskaexpeditions","embed_base_url":"https://fareharbor.com/alaskaexpeditions/items","contact_phone":"907-555-0182"},{"id":"glacierbaytours","name":"Glacier Bay Tours","description":"Premium whale watching & fjord cruises.","ports":["juneau"],"fh_shortname":"glacierbay","embed_base_url":"https://fareharbor.com/glacierbay/items","contact_phone":"907-555-2299"},{"id":"frontieradventures","name":"Frontier Adventures","description":"Historic railway & gold trail excursions.","ports":["skagway"],"fh_shortname":"frontier","embed_base_url":"https://fareharbor.com/frontier/items","contact_phone":"907-555-7711"}]);}),
"[project]/data/tours.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("[{\"slug\":\"tour-1\",\"title\":\"Alaska Kayak Experience #1\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"5 hours\",\"price_from\":249,\"category\":\"Railway\",\"operator_id\":\"frontieradventures\",\"port\":\"skagway\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1000\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-2\",\"title\":\"Alaska Glacier Experience #2\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"7 hours\",\"price_from\":159,\"category\":\"Railway\",\"operator_id\":\"glacierbaytours\",\"port\":\"sitka\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1001\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-3\",\"title\":\"Alaska Hiking Experience #3\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"3 hours\",\"price_from\":89,\"category\":\"Glacier\",\"operator_id\":\"frontieradventures\",\"port\":\"skagway\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1002\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-4\",\"title\":\"Alaska Railway Experience #4\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"7 hours\",\"price_from\":199,\"category\":\"Cruise\",\"operator_id\":\"glacierbaytours\",\"port\":\"ketchikan\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1003\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-5\",\"title\":\"Alaska Cruise Experience #5\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"3 hours\",\"price_from\":129,\"category\":\"Glacier\",\"operator_id\":\"frontieradventures\",\"port\":\"juneau\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1004\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-6\",\"title\":\"Alaska Railway Experience #6\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"3 hours\",\"price_from\":129,\"category\":\"Kayak\",\"operator_id\":\"frontieradventures\",\"port\":\"juneau\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1005\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-7\",\"title\":\"Alaska Glacier Experience #7\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"7 hours\",\"price_from\":89,\"category\":\"Glacier\",\"operator_id\":\"glacierbaytours\",\"port\":\"juneau\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1006\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-8\",\"title\":\"Alaska Glacier Experience #8\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"7 hours\",\"price_from\":89,\"category\":\"Cruise\",\"operator_id\":\"glacierbaytours\",\"port\":\"juneau\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1007\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-9\",\"title\":\"Alaska Kayak Experience #9\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"6 hours\",\"price_from\":159,\"category\":\"Cruise\",\"operator_id\":\"glacierbaytours\",\"port\":\"skagway\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1008\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-10\",\"title\":\"Alaska Hiking Experience #10\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"5 hours\",\"price_from\":349,\"category\":\"Adventure\",\"operator_id\":\"alaskaexpeditions\",\"port\":\"ketchikan\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1009\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-11\",\"title\":\"Alaska Glacier Experience #11\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"4 hours\",\"price_from\":349,\"category\":\"Adventure\",\"operator_id\":\"glacierbaytours\",\"port\":\"skagway\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1010\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-12\",\"title\":\"Alaska Cruise Experience #12\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"7 hours\",\"price_from\":159,\"category\":\"Wildlife\",\"operator_id\":\"alaskaexpeditions\",\"port\":\"ketchikan\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1011\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-13\",\"title\":\"Alaska Hiking Experience #13\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"7 hours\",\"price_from\":249,\"category\":\"Railway\",\"operator_id\":\"alaskaexpeditions\",\"port\":\"juneau\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1012\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-14\",\"title\":\"Alaska Railway Experience #14\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"4 hours\",\"price_from\":129,\"category\":\"Wildlife\",\"operator_id\":\"glacierbaytours\",\"port\":\"juneau\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1013\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-15\",\"title\":\"Alaska Glacier Experience #15\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"8 hours\",\"price_from\":349,\"category\":\"Adventure\",\"operator_id\":\"frontieradventures\",\"port\":\"ketchikan\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1014\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-16\",\"title\":\"Alaska Cruise Experience #16\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"3 hours\",\"price_from\":249,\"category\":\"Cruise\",\"operator_id\":\"glacierbaytours\",\"port\":\"juneau\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1015\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-17\",\"title\":\"Alaska Kayak Experience #17\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"3 hours\",\"price_from\":249,\"category\":\"Glacier\",\"operator_id\":\"alaskaexpeditions\",\"port\":\"juneau\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1016\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-18\",\"title\":\"Alaska Hiking Experience #18\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"3 hours\",\"price_from\":349,\"category\":\"Railway\",\"operator_id\":\"alaskaexpeditions\",\"port\":\"ketchikan\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1017\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-19\",\"title\":\"Alaska Wildlife Experience #19\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"6 hours\",\"price_from\":129,\"category\":\"Glacier\",\"operator_id\":\"frontieradventures\",\"port\":\"sitka\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1018\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-20\",\"title\":\"Alaska Wildlife Experience #20\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"7 hours\",\"price_from\":159,\"category\":\"Kayak\",\"operator_id\":\"alaskaexpeditions\",\"port\":\"sitka\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1019\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-21\",\"title\":\"Alaska Cruise Experience #21\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"4 hours\",\"price_from\":129,\"category\":\"Railway\",\"operator_id\":\"glacierbaytours\",\"port\":\"ketchikan\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1020\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-22\",\"title\":\"Alaska Cruise Experience #22\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"7 hours\",\"price_from\":89,\"category\":\"Glacier\",\"operator_id\":\"frontieradventures\",\"port\":\"juneau\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1021\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-23\",\"title\":\"Alaska Glacier Experience #23\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"6 hours\",\"price_from\":129,\"category\":\"Adventure\",\"operator_id\":\"alaskaexpeditions\",\"port\":\"sitka\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1022\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-24\",\"title\":\"Alaska Glacier Experience #24\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"2 hours\",\"price_from\":129,\"category\":\"Kayak\",\"operator_id\":\"frontieradventures\",\"port\":\"juneau\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1023\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-25\",\"title\":\"Alaska Cruise Experience #25\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"4 hours\",\"price_from\":129,\"category\":\"Adventure\",\"operator_id\":\"frontieradventures\",\"port\":\"sitka\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1024\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-26\",\"title\":\"Alaska Railway Experience #26\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"8 hours\",\"price_from\":89,\"category\":\"Hiking\",\"operator_id\":\"frontieradventures\",\"port\":\"sitka\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1025\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-27\",\"title\":\"Alaska Wildlife Experience #27\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"4 hours\",\"price_from\":89,\"category\":\"Kayak\",\"operator_id\":\"glacierbaytours\",\"port\":\"ketchikan\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1026\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-28\",\"title\":\"Alaska Adventure Experience #28\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"7 hours\",\"price_from\":299,\"category\":\"Kayak\",\"operator_id\":\"frontieradventures\",\"port\":\"sitka\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1027\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-29\",\"title\":\"Alaska Kayak Experience #29\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"6 hours\",\"price_from\":129,\"category\":\"Railway\",\"operator_id\":\"alaskaexpeditions\",\"port\":\"skagway\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1028\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-30\",\"title\":\"Alaska Cruise Experience #30\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"4 hours\",\"price_from\":199,\"category\":\"Glacier\",\"operator_id\":\"glacierbaytours\",\"port\":\"sitka\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1029\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-31\",\"title\":\"Alaska Hiking Experience #31\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"4 hours\",\"price_from\":349,\"category\":\"Glacier\",\"operator_id\":\"glacierbaytours\",\"port\":\"ketchikan\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1030\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-32\",\"title\":\"Alaska Wildlife Experience #32\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"2 hours\",\"price_from\":299,\"category\":\"Cruise\",\"operator_id\":\"alaskaexpeditions\",\"port\":\"juneau\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1031\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-33\",\"title\":\"Alaska Wildlife Experience #33\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"4 hours\",\"price_from\":159,\"category\":\"Railway\",\"operator_id\":\"glacierbaytours\",\"port\":\"juneau\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1032\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-34\",\"title\":\"Alaska Cruise Experience #34\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"6 hours\",\"price_from\":129,\"category\":\"Railway\",\"operator_id\":\"alaskaexpeditions\",\"port\":\"skagway\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1033\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-35\",\"title\":\"Alaska Railway Experience #35\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"7 hours\",\"price_from\":89,\"category\":\"Adventure\",\"operator_id\":\"glacierbaytours\",\"port\":\"juneau\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1034\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-36\",\"title\":\"Alaska Adventure Experience #36\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"8 hours\",\"price_from\":129,\"category\":\"Hiking\",\"operator_id\":\"glacierbaytours\",\"port\":\"ketchikan\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1035\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-37\",\"title\":\"Alaska Hiking Experience #37\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"3 hours\",\"price_from\":159,\"category\":\"Glacier\",\"operator_id\":\"frontieradventures\",\"port\":\"skagway\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1036\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-38\",\"title\":\"Alaska Railway Experience #38\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"4 hours\",\"price_from\":199,\"category\":\"Railway\",\"operator_id\":\"frontieradventures\",\"port\":\"juneau\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1037\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-39\",\"title\":\"Alaska Cruise Experience #39\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"2 hours\",\"price_from\":89,\"category\":\"Cruise\",\"operator_id\":\"glacierbaytours\",\"port\":\"sitka\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1038\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-40\",\"title\":\"Alaska Glacier Experience #40\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"6 hours\",\"price_from\":199,\"category\":\"Kayak\",\"operator_id\":\"glacierbaytours\",\"port\":\"ketchikan\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1039\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-41\",\"title\":\"Alaska Glacier Experience #41\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"3 hours\",\"price_from\":299,\"category\":\"Cruise\",\"operator_id\":\"glacierbaytours\",\"port\":\"ketchikan\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1040\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-42\",\"title\":\"Alaska Kayak Experience #42\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"2 hours\",\"price_from\":199,\"category\":\"Hiking\",\"operator_id\":\"frontieradventures\",\"port\":\"sitka\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1041\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-43\",\"title\":\"Alaska Railway Experience #43\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"5 hours\",\"price_from\":129,\"category\":\"Hiking\",\"operator_id\":\"alaskaexpeditions\",\"port\":\"ketchikan\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1042\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-44\",\"title\":\"Alaska Railway Experience #44\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"4 hours\",\"price_from\":159,\"category\":\"Railway\",\"operator_id\":\"glacierbaytours\",\"port\":\"ketchikan\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1043\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-45\",\"title\":\"Alaska Cruise Experience #45\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"2 hours\",\"price_from\":129,\"category\":\"Hiking\",\"operator_id\":\"alaskaexpeditions\",\"port\":\"skagway\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1044\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-46\",\"title\":\"Alaska Cruise Experience #46\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"5 hours\",\"price_from\":159,\"category\":\"Cruise\",\"operator_id\":\"frontieradventures\",\"port\":\"ketchikan\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1045\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-47\",\"title\":\"Alaska Glacier Experience #47\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"4 hours\",\"price_from\":89,\"category\":\"Wildlife\",\"operator_id\":\"alaskaexpeditions\",\"port\":\"ketchikan\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1046\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-48\",\"title\":\"Alaska Cruise Experience #48\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"4 hours\",\"price_from\":89,\"category\":\"Kayak\",\"operator_id\":\"alaskaexpeditions\",\"port\":\"skagway\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1047\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-49\",\"title\":\"Alaska Kayak Experience #49\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"6 hours\",\"price_from\":349,\"category\":\"Railway\",\"operator_id\":\"glacierbaytours\",\"port\":\"juneau\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1048\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-50\",\"title\":\"Alaska Hiking Experience #50\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"3 hours\",\"price_from\":89,\"category\":\"Cruise\",\"operator_id\":\"glacierbaytours\",\"port\":\"ketchikan\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1049\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-51\",\"title\":\"Alaska Adventure Experience #51\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"7 hours\",\"price_from\":89,\"category\":\"Cruise\",\"operator_id\":\"frontieradventures\",\"port\":\"juneau\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1050\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-52\",\"title\":\"Alaska Kayak Experience #52\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"6 hours\",\"price_from\":129,\"category\":\"Railway\",\"operator_id\":\"frontieradventures\",\"port\":\"juneau\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1051\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-53\",\"title\":\"Alaska Cruise Experience #53\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"7 hours\",\"price_from\":199,\"category\":\"Wildlife\",\"operator_id\":\"glacierbaytours\",\"port\":\"skagway\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1052\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-54\",\"title\":\"Alaska Wildlife Experience #54\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"5 hours\",\"price_from\":199,\"category\":\"Kayak\",\"operator_id\":\"alaskaexpeditions\",\"port\":\"skagway\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1053\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-55\",\"title\":\"Alaska Glacier Experience #55\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"4 hours\",\"price_from\":249,\"category\":\"Wildlife\",\"operator_id\":\"glacierbaytours\",\"port\":\"skagway\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1054\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-56\",\"title\":\"Alaska Adventure Experience #56\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"6 hours\",\"price_from\":159,\"category\":\"Railway\",\"operator_id\":\"alaskaexpeditions\",\"port\":\"juneau\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1055\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-57\",\"title\":\"Alaska Kayak Experience #57\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"8 hours\",\"price_from\":129,\"category\":\"Adventure\",\"operator_id\":\"glacierbaytours\",\"port\":\"ketchikan\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1056\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-58\",\"title\":\"Alaska Hiking Experience #58\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"3 hours\",\"price_from\":349,\"category\":\"Wildlife\",\"operator_id\":\"alaskaexpeditions\",\"port\":\"ketchikan\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1057\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-59\",\"title\":\"Alaska Glacier Experience #59\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"8 hours\",\"price_from\":199,\"category\":\"Railway\",\"operator_id\":\"frontieradventures\",\"port\":\"juneau\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1058\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-60\",\"title\":\"Alaska Hiking Experience #60\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"3 hours\",\"price_from\":249,\"category\":\"Cruise\",\"operator_id\":\"glacierbaytours\",\"port\":\"sitka\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1059\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-61\",\"title\":\"Alaska Hiking Experience #61\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"5 hours\",\"price_from\":129,\"category\":\"Hiking\",\"operator_id\":\"alaskaexpeditions\",\"port\":\"sitka\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1060\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-62\",\"title\":\"Alaska Adventure Experience #62\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"4 hours\",\"price_from\":299,\"category\":\"Cruise\",\"operator_id\":\"frontieradventures\",\"port\":\"sitka\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1061\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-63\",\"title\":\"Alaska Adventure Experience #63\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"5 hours\",\"price_from\":159,\"category\":\"Hiking\",\"operator_id\":\"alaskaexpeditions\",\"port\":\"sitka\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1062\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-64\",\"title\":\"Alaska Wildlife Experience #64\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"6 hours\",\"price_from\":199,\"category\":\"Adventure\",\"operator_id\":\"frontieradventures\",\"port\":\"juneau\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1063\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-65\",\"title\":\"Alaska Hiking Experience #65\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"6 hours\",\"price_from\":159,\"category\":\"Cruise\",\"operator_id\":\"alaskaexpeditions\",\"port\":\"ketchikan\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1064\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-66\",\"title\":\"Alaska Kayak Experience #66\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"7 hours\",\"price_from\":199,\"category\":\"Railway\",\"operator_id\":\"glacierbaytours\",\"port\":\"skagway\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1065\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-67\",\"title\":\"Alaska Adventure Experience #67\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"2 hours\",\"price_from\":89,\"category\":\"Railway\",\"operator_id\":\"frontieradventures\",\"port\":\"skagway\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1066\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-68\",\"title\":\"Alaska Kayak Experience #68\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"2 hours\",\"price_from\":129,\"category\":\"Glacier\",\"operator_id\":\"alaskaexpeditions\",\"port\":\"skagway\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1067\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-69\",\"title\":\"Alaska Cruise Experience #69\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"7 hours\",\"price_from\":129,\"category\":\"Wildlife\",\"operator_id\":\"alaskaexpeditions\",\"port\":\"sitka\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1068\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-70\",\"title\":\"Alaska Kayak Experience #70\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"4 hours\",\"price_from\":129,\"category\":\"Cruise\",\"operator_id\":\"alaskaexpeditions\",\"port\":\"ketchikan\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1069\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-71\",\"title\":\"Alaska Cruise Experience #71\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"4 hours\",\"price_from\":349,\"category\":\"Glacier\",\"operator_id\":\"frontieradventures\",\"port\":\"ketchikan\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1070\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-72\",\"title\":\"Alaska Hiking Experience #72\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"7 hours\",\"price_from\":199,\"category\":\"Hiking\",\"operator_id\":\"alaskaexpeditions\",\"port\":\"skagway\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1071\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-73\",\"title\":\"Alaska Wildlife Experience #73\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"8 hours\",\"price_from\":199,\"category\":\"Adventure\",\"operator_id\":\"glacierbaytours\",\"port\":\"juneau\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1072\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-74\",\"title\":\"Alaska Adventure Experience #74\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"6 hours\",\"price_from\":299,\"category\":\"Railway\",\"operator_id\":\"frontieradventures\",\"port\":\"skagway\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1073\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-75\",\"title\":\"Alaska Glacier Experience #75\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"2 hours\",\"price_from\":199,\"category\":\"Hiking\",\"operator_id\":\"frontieradventures\",\"port\":\"juneau\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1074\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-76\",\"title\":\"Alaska Hiking Experience #76\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"6 hours\",\"price_from\":299,\"category\":\"Adventure\",\"operator_id\":\"frontieradventures\",\"port\":\"ketchikan\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1075\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-77\",\"title\":\"Alaska Railway Experience #77\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"7 hours\",\"price_from\":299,\"category\":\"Glacier\",\"operator_id\":\"glacierbaytours\",\"port\":\"juneau\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1076\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-78\",\"title\":\"Alaska Glacier Experience #78\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"4 hours\",\"price_from\":89,\"category\":\"Wildlife\",\"operator_id\":\"frontieradventures\",\"port\":\"ketchikan\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1077\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-79\",\"title\":\"Alaska Railway Experience #79\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"8 hours\",\"price_from\":249,\"category\":\"Cruise\",\"operator_id\":\"frontieradventures\",\"port\":\"skagway\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1078\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]},{\"slug\":\"tour-80\",\"title\":\"Alaska Adventure Experience #80\",\"description_short\":\"A breathtaking guided experience.\",\"description_long\":\"Explore the wild landscapes of Alaska with expert guides, immersive activities, and unforgettable scenery.\",\"duration\":\"3 hours\",\"price_from\":89,\"category\":\"Cruise\",\"operator_id\":\"frontieradventures\",\"port\":\"skagway\",\"images\":[],\"source\":\"manual\",\"last_updated\":\"2025-11-26\",\"fh_item_id\":\"1079\",\"tags\":[\"alaska\",\"tour\",\"shorex\"]}]"));}),
"[project]/lib/dataLoaderHelpers.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAllOperatorIds",
    ()=>getAllOperatorIds,
    "getAllPortIds",
    ()=>getAllPortIds,
    "getAllTourSlugs",
    ()=>getAllTourSlugs,
    "getOperatorById",
    ()=>getOperatorById,
    "getOperators",
    ()=>getOperators,
    "getPortById",
    ()=>getPortById,
    "getPorts",
    ()=>getPorts,
    "getTourBySlug",
    ()=>getTourBySlug,
    "getTours",
    ()=>getTours,
    "getToursForOperator",
    ()=>getToursForOperator,
    "getToursForPort",
    ()=>getToursForPort
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$ports$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/data/ports.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$operators$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/data/operators.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$tours$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/data/tours.json (json)");
;
;
;
function getPorts() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$ports$2e$json__$28$json$29$__["default"];
}
function getOperators() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$operators$2e$json__$28$json$29$__["default"];
}
function getTours() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$tours$2e$json__$28$json$29$__["default"];
}
function getPortById(id) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$ports$2e$json__$28$json$29$__["default"].find((p)=>p.id === id);
}
function getOperatorById(id) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$operators$2e$json__$28$json$29$__["default"].find((o)=>o.id === id);
}
function getTourBySlug(slug) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$tours$2e$json__$28$json$29$__["default"].find((t)=>t.slug === slug);
}
function getToursForPort(portId) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$tours$2e$json__$28$json$29$__["default"].filter((t)=>t.port === portId);
}
function getToursForOperator(opId) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$tours$2e$json__$28$json$29$__["default"].filter((t)=>t.operator_id === opId);
}
function getAllPortIds() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$ports$2e$json__$28$json$29$__["default"].map((p)=>p.id);
}
function getAllOperatorIds() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$operators$2e$json__$28$json$29$__["default"].map((o)=>o.id);
}
function getAllTourSlugs() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$tours$2e$json__$28$json$29$__["default"].map((t)=>t.slug);
}
}),
"[project]/lib/dataLoader.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildEmbedUrl",
    ()=>buildEmbedUrl,
    "generateSchema",
    ()=>generateSchema,
    "getRelatedTours",
    ()=>getRelatedTours
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dataLoaderHelpers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/dataLoaderHelpers.ts [app-rsc] (ecmascript)");
;
;
function generateSchema(type, data) {
    return {
        "@context": "https://schema.org",
        "@type": type === "tour" ? "TouristTrip" : type === "port" ? "City" : "LocalBusiness",
        "name": data.name || data.title,
        "description": data.description || data.tagline || ""
    };
}
function getRelatedTours(slug, category, port) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dataLoaderHelpers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTours"])().filter((t)=>t.slug !== slug && (t.category === category || t.port === port)).slice(0, 4);
}
function buildEmbedUrl(operator, tour) {
    if (!operator?.embed_base_url) return null;
    return tour?.fh_item_id ? `${operator.embed_base_url}/items/${tour.fh_item_id}/?full-items=yes` : operator.embed_base_url;
}
}),
"[project]/components/FareHarborEmbed.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FareHarborEmbed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function FareHarborEmbed({ embedUrl }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
        src: embedUrl,
        width: "100%",
        height: "600",
        frameBorder: "0",
        title: "FareHarbor Booking Widget"
    }, void 0, false, {
        fileName: "[project]/components/FareHarborEmbed.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/CallToBook.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CallToBook
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function CallToBook({ phone }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl border border-emerald-500/30 bg-slate-900/60 p-4 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-semibold text-emerald-300 mb-1",
                children: "Ready to Book?"
            }, void 0, false, {
                fileName: "[project]/components/CallToBook.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-slate-300",
                children: [
                    "Call us at ",
                    phone,
                    " to reserve your spot."
                ]
            }, void 0, true, {
                fileName: "[project]/components/CallToBook.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/CallToBook.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/TourCard.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TourCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function TourCard({ tour, operator }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "flex flex-col rounded-xl border border-slate-700 bg-slate-900/70 p-4 shadow-sm",
        children: [
            tour.images[0] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: tour.images[0],
                alt: tour.title,
                className: "w-full h-32 object-cover rounded-md mb-2",
                loading: "lazy"
            }, void 0, false, {
                fileName: "[project]/components/TourCard.tsx",
                lineNumber: 11,
                columnNumber: 26
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-2 mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-semibold uppercase tracking-wide text-emerald-300",
                        children: operator.name
                    }, void 0, false, {
                        fileName: "[project]/components/TourCard.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[11px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300",
                        children: tour.category
                    }, void 0, false, {
                        fileName: "[project]/components/TourCard.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/TourCard.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-base font-semibold mb-1",
                children: tour.title
            }, void 0, false, {
                fileName: "[project]/components/TourCard.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-slate-300 mb-2",
                children: tour.description_short
            }, void 0, false, {
                fileName: "[project]/components/TourCard.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-auto flex flex-wrap items-center justify-between gap-2 text-xs text-slate-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-0.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        children: "Duration:"
                                    }, void 0, false, {
                                        fileName: "[project]/components/TourCard.tsx",
                                        lineNumber: 20,
                                        columnNumber: 14
                                    }, this),
                                    " ",
                                    tour.duration
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/TourCard.tsx",
                                lineNumber: 20,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        children: "From:"
                                    }, void 0, false, {
                                        fileName: "[project]/components/TourCard.tsx",
                                        lineNumber: 21,
                                        columnNumber: 14
                                    }, this),
                                    " $",
                                    tour.price_from.toLocaleString(),
                                    " USD"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/TourCard.tsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/TourCard.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: `/tour/${tour.slug}`,
                        className: "inline-flex items-center rounded-full border border-emerald-400/60 px-3 py-1 text-[11px] font-semibold text-emerald-200 hover:bg-emerald-400/10",
                        children: "View Details / Book"
                    }, void 0, false, {
                        fileName: "[project]/components/TourCard.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/TourCard.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/TourCard.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/RelatedTours.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RelatedTours
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TourCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/TourCard.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dataLoader$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/dataLoader.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dataLoaderHelpers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/dataLoaderHelpers.ts [app-rsc] (ecmascript)");
;
;
;
function RelatedTours({ relatedTours }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-lg font-semibold",
                children: "You Might Also Like"
            }, void 0, false, {
                fileName: "[project]/components/RelatedTours.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 sm:grid-cols-2",
                children: relatedTours.map((tour)=>{
                    const operator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dataLoaderHelpers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getOperatorById"])(tour.operator_id);
                    if (!operator) return null;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TourCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        tour: tour,
                        operator: operator
                    }, tour.slug, false, {
                        fileName: "[project]/components/RelatedTours.tsx",
                        lineNumber: 17,
                        columnNumber: 18
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/RelatedTours.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/RelatedTours.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/tour/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TourPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dataLoader$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/dataLoader.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dataLoaderHelpers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/dataLoaderHelpers.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FareHarborEmbed$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/FareHarborEmbed.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CallToBook$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CallToBook.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RelatedTours$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/RelatedTours.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
async function TourPage({ params }) {
    const { slug } = await params;
    const tour = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dataLoaderHelpers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTourBySlug"])(slug);
    if (!tour) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    const operator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dataLoaderHelpers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getOperatorById"])(tour.operator_id);
    if (!operator) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    const related = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dataLoader$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getRelatedTours"])(tour.slug, tour.category, tour.port);
    const schema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dataLoader$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateSchema"])("tour", tour);
    const embedUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dataLoader$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["buildEmbedUrl"])(operator, tour);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-slate-950 text-slate-50 p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(schema)
                }
            }, void 0, false, {
                fileName: "[project]/app/tour/[slug]/page.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl mb-2",
                children: tour.title
            }, void 0, false, {
                fileName: "[project]/app/tour/[slug]/page.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-slate-300 mb-4",
                children: tour.description_long
            }, void 0, false, {
                fileName: "[project]/app/tour/[slug]/page.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            embedUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FareHarborEmbed$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                embedUrl: embedUrl
            }, void 0, false, {
                fileName: "[project]/app/tour/[slug]/page.tsx",
                lineNumber: 27,
                columnNumber: 19
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CallToBook$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                phone: operator.contact_phone
            }, void 0, false, {
                fileName: "[project]/app/tour/[slug]/page.tsx",
                lineNumber: 27,
                columnNumber: 61
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RelatedTours$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                relatedTours: related
            }, void 0, false, {
                fileName: "[project]/app/tour/[slug]/page.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/tour/[slug]/page.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/tour/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/tour/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4a06dd4c._.js.map