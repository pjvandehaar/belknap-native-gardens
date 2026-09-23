const plants = [
    {
        name: "Alum Root",
        scientificName: "Heuchera americana",
        height: "1-3 ft",
        gallery: [
            './assets/alum-root-1.jpg', // https://www.minnesotawildflowers.info/udata/r9ndp23q/other/heuchera-richardsonii-prairie-alumroot_0608_132544.jpg
            './assets/alum-root-2.jpg', // https://gnps.org/wp-content/uploads/bfi_thumb/Heuchera-americana-qx0fprr5ue99jnbbb4i9lbl460lv17b85v3v7c1ssg.jpg
        ]
    },
    {
        name: "Bee Balm",
        scientificName: "Monarda punctata",
        otherNames: ["Horsemint", "Spotted Bee Balm"],
        height: "2-4 ft",
        gallery: [
            './assets/bee-balm-1.jpg', // https://www.canr.msu.edu/contentAsset/image/5911e9fa-b006-4ae3-9cd8-9ba7bb9012a0/fileAsset/filter/Resize/resize_w/1200
            './assets/bee-balm-2.jpg', // https://www.canr.msu.edu/contentAsset/image/008083be-419c-4dd7-8ae1-c2aba5c6c407/fileAsset/filter/Resize/resize_w/1200
        ]
    },
    {
        name: "Carex Brevior",
        scientificName: "Carex brevior",
        otherNames: ['Plains Oval Sedge', 'Praire Sedge', 'Shortbeak Sedge'],
        height: "1-3 ft",
        gallery: [
            './assets/carex-brevior-1.jpg', // https://hoffmannursery.com/assets/files/images/carex-brevior-01.jpg
            './assets/carex-brevior-2.jpg', // https://cdn-kocjb.nitrocdn.com/jCEhjcPcDPgQTAaGxXvYrXpsMJocXVFM/assets/images/optimized/rev-756df5b/kb.jniplants.com/wp-content/uploads/2023/01/plains-oval-sedge-carex-brevior-ftimg.jpg
        ]
    },
    {
        name: "Carex Sparganoides",
        scientificName: "Carex sparganioides",
        otherNames: ['Bur-reed Sedge'],
        height: "1-3 ft",
        gallery: [
            './assets/carex-sparganoides-1.jpg', // http://www.thismia.com/C/Carex_sparganioides1.jpg
            './assets/carex-sparganoides-2.jpg', // https://ornamentalgrass.ca/images/carex-sparganioides.jpg
            './assets/carex-sparganoides-3.jpg', // https://www.minnesotawildflowers.info/udata/r9ndp23q/pd3/carex-sparganioides-0624-8.jpg
            './assets/carex-sparganoides-4.jpg', // https://www.minnesotawildflowers.info/udata/r9ndp23q/grass/carex-sparganioides_0609_160832.jpg
            './assets/carex-sparganoides-5.jpg', // https://www.minnesotawildflowers.info/udata/r9ndp23q/grass/carex-sparganioides-6-16-1.jpg
        ],
        links: ["https://www.minnesotawildflowers.info/grass-sedge-rush/bur-reed-sedge", "https://en.wikipedia.org/wiki/Carex_sparganioides"]
    },
    {
        name: "Lance leaf coreopsis",
        scientificName: "Coreopsis lanceolata",
        otherNames: ['Sand Coreopsis'],
        height: "1-2 ft",
        bloomTime: "May-July",
        gallery: [
            './assets/lance-leaf-coreopsis-1.jpg', // https://www.minnesotawildflowers.info/udata/r9ndp23q/yellow/coreopsis-lanceolata-lance-leaved-tickseed_0613_165358.jpg
            './assets/lance-leaf-coreopsis-2.jpg', // https://www.minnesotawildflowers.info/udata/r9ndp23q/yellow/coreopsis-lanceolata-lance-leaved-tickseed_0613_165211.jpg
            './assets/lance-leaf-coreopsis-3.jpg', // https://www.canr.msu.edu/contentAsset/image/07c593cb-1fd7-429a-8574-30daebd3aefe/fileAsset/filter/Resize/resize_w/1200
            './assets/lance-leaf-coreopsis-4.jpg', // https://www.canr.msu.edu/contentAsset/image/a1d89ddb-f7a9-4c04-90aa-62c25c9d2260/fileAsset/filter/Resize/resize_w/1200
            './assets/lance-leaf-coreopsis-5.jpg', // https://www.minnesotawildflowers.info/udata/r9ndp23q/yellow/coreopsis-lanceolata-lance-leaved-tickseed_0613_165259.jpg
        ]
    },
    {
        name: "Lead Plant",
        scientificName: "Amorpha canescens",
        height: "2-3 ft",
        gallery: [
            './assets/lead-plant-1.jpg', // https://www.minnesotawildflowers.info/udata/r9ndp23q/purple/lead-plant_0701_101513.jpg
            './assets/lead-plant-2.jpg', // https://www.applewoodseed.com/wp-content/uploads/2016/11/AMCA-1301.jpg
        ]
    },
    {
        name: "New England Aster",
        scientificName: "Symphyotrichum novae-angliae",
        height: "3-6 ft",
        bloomTime: "Aug-Oct",
        gallery: [
            './assets/new-england-aster-1.png', // https://mainenativeplants.org/wp-content/uploads/2020/04/New-England-Aster-Symphyotrichum-novae-angliae.png
            './assets/new-england-aster-2.jpg', // https://www.canr.msu.edu/contentAsset/image/d5b7d646-3ad0-44f6-a192-3e8f1b174592/fileAsset/filter/Resize/resize_w/1200
            './assets/new-england-aster-3.jpg', // https://www.minnesotawildflowers.info/udata/r9ndp23q/purple/new-england-aster-100_5155.jpg
            './assets/new-england-aster-4.jpg', // https://www.minnesotawildflowers.info/udata/r9ndp23q/purple/new-england-aster-100_5152.jpg
            './assets/new-england-aster-5.jpg', // https://www.minnesotawildflowers.info/udata/r9ndp23q/purple/symphyotrichum-novae-angliae-new-england-aster_0920_112404.jpg
            './assets/new-england-aster-6.jpg', // https://www.minnesotawildflowers.info/udata/r9ndp23q/purple/symphyotrichum-novae-angliae-new-england-aster_0904_140443.jpg
        ],
        links: ['https://www.canr.msu.edu/nativeplants/plant_facts/new_england_aster', 'https://www.minnesotawildflowers.info/flower/new-england-aster'],
    },
    {
        name: "Purple love grass",
        scientificName: "Eragrostis spectabilis",
        height: "1-2 ft",
        gallery: [
            './assets/purple-love-grass-1.jpg', // https://www.minnesotawildflowers.info/udata/r9ndp23q/grass/eragrostis-spectabilis_0724_103712.jpg
            './assets/purple-love-grass-2.jpg', // https://www.minnesotawildflowers.info/udata/r9ndp23q/grass/eragrostis-spectabilis_0724_114001.jpg
            './assets/purple-love-grass-3.jpg', // https://www.minnesotawildflowers.info/udata/r9ndp23q/pd3/eragrostis-spectabilis-15-4.jpg
            './assets/purple-love-grass-4.jpg', // https://www.minnesotawildflowers.info/udata/r9ndp23q/grass/eragrostis-spectabilis_0724_103945.jpg
            './assets/purple-love-grass-5.jpg', // https://www.minnesotawildflowers.info/udata/r9ndp23q/grass/eragrostis-spectabilis_0724_103808.jpg
        ]
    },
    {
        name: "Rough Blazing Star",
        scientificName: "Liatris aspera",
        height: "3-5 ft",
        bloomTime: "Sept",
        gallery: [
            './assets/rough-blazing-star-1.jpg', // https://www.canr.msu.edu/contentAsset/image/80bcf670-e8de-4c17-8716-e69cc6afd224/fileAsset/filter/Resize/resize_w/1200
            './assets/rough-blazing-star-2.jpg', // https://www.minnesotawildflowers.info/udata/r9ndp23q/purple/rough-blazing-star-0728_085557.jpg
            './assets/rough-blazing-star-3.jpg', // https://www.minnesotawildflowers.info/udata/r9ndp23q/purple/rough-blazing-star_1101_142454.jpg
            './assets/rough-blazing-star-4.jpg', // https://www.minnesotawildflowers.info/udata/r9ndp23q/purple/rough-blazing-star_0822_103728.jpg
            './assets/rough-blazing-star-5.jpg', // https://www.minnesotawildflowers.info/udata/r9ndp23q/purple/rough-blazing-star-100_3756.jpg
        ],
        links: ['https://www.canr.msu.edu/nativeplants/plant_facts/rough_blazing_star', 'https://www.minnesotawildflowers.info/flower/rough-blazing-star']
    },
    {
        name: "Shrubby St. John’s Wort",
        scientificName: "Hypericum punctatum",
        height: "2-4 ft",
        gallery: [
            './assets/shrubby-st-john-s-wort-1.jpg', // https://www.minnesotawildflowers.info/udata/r9ndp23q/pd/hypericum-punctatum-988-6.jpg
            './assets/shrubby-st-john-s-wort-2.jpg', // https://www.minnesotawildflowers.info/udata/r9ndp23q/pd/hypericum-punctatum-798-2.jpg
            './assets/shrubby-st-john-s-wort-3.jpg', // https://www.minnesotawildflowers.info/udata/r9ndp23q/pd/hypericum-punctatum-84393-22.jpg
            './assets/shrubby-st-john-s-wort-4.jpg', // https://www.minnesotawildflowers.info/udata/r9ndp23q/pd/hypericum-punctatum-489238.jpg
            './assets/shrubby-st-john-s-wort-5.jpg', // https://www.minnesotawildflowers.info/udata/r9ndp23q/pd/hypericum-punctatum-7981.jpg
        ],
        links: ['https://www.minnesotawildflowers.info/flower/spotted-st.-johns-wort'],
    },
    {
        name: "Swamp Milkweed",
        scientificName: "Asclepias incarnata",
        height: "3-5 ft",
        gallery: [
            './assets/swamp-milkweed-1.jpg', // https://www.selectseeds.com/cdn/shop/products/014-2-1000_1000x1000.jpg?v=1687464393
        ]
    },
    {
        name: "Three-awned Grass",
        scientificName: "Aristida purpurea",
        otherNames: ['Purple Threeawn'],
        height: "1-2 ft",
        gallery: [
            './assets/three-awned-grass-1.jpg', // https://plant-material.com/cdn/shop/products/IMG_5884-min.jpg?v=1664974811
            './assets/three-awned-grass-2.jpg', // https://plant-material.com/cdn/shop/products/IMG_5883-min.jpg?v=1664974813
            './assets/three-awned-grass-3.jpg', // https://www.minnesotawildflowers.info/udata/r9ndp23q/pd3/aristida-purpurea-091416-1.jpg
            './assets/three-awned-grass-4.jpg', // https://www.minnesotawildflowers.info/udata/r9ndp23q/pd3/aristida-purpurea-091416-7.jpg
            './assets/three-awned-grass-5.jpg', // https://www.minnesotawildflowers.info/udata/r9ndp23q/pd3/aristida-purpurea-151-1.jpg
        ],
        links: [
            "https://www.minnesotawildflowers.info/grass-sedge-rush/purple-three-awn",
        ],
    },
    {
        name: "Virginia Mountain Mint",
        scientificName: "Pycnanthemum virginianum",
        height: "2-3 ft",
        gallery: [
            './assets/virginia-mountain-mint-1.jpg', // https://www.minnesotawildflowers.info/udata/r9ndp23q/white/pycnanthemum-virginianum-virginia-mountain-mint_0720_112738.jpg
            './assets/virginia-mountain-mint-2.jpg', // https://www.minnesotawildflowers.info/udata/r9ndp23q/white/pycnanthemum-virginianum-virginia-mountain-mint_1018_155321.jpg
            './assets/virginia-mountain-mint-3.jpg', // https://www.minnesotawildflowers.info/udata/r9ndp23q/white/pycnanthemum-virginianum-virginia-mountain-mint_0528_135856.jpg
            './assets/virginia-mountain-mint-4.jpg', // https://www.minnesotawildflowers.info/udata/r9ndp23q/white/pycnanthemum-virginianum-virginia-mountain-mint_0528_135839.jpg
            './assets/virginia-mountain-mint-5.jpg', // https://www.minnesotawildflowers.info/udata/r9ndp23q/white/virginia-mountain-mint_0919_173419.jpg
        ],
        links: ['https://www.minnesotawildflowers.info/flower/virginia-mountain-mint'],
    },
    {
        name: "Wild Columbine",
        scientificName: "Aquilegia canadensis",
        otherNames: ['Red Columbine'],
        height: "1-3 ft",
        gallery: [
            './assets/wild-columbine-1.jpg', // https://www.minnesotawildflowers.info/udata/r9ndp23q/red/red-columbine-100_5130.jpg
            './assets/wild-columbine-2.jpg', // https://www.minnesotawildflowers.info/udata/r9ndp23q/pd/aquilegia-canadensis-28.jpg
            './assets/wild-columbine-3.jpg', // https://images.squarespace-cdn.com/content/v1/65e9f518f091b23d734eebe2/96cd511b-6938-49cc-b65d-52a714d4fded/WSP_aquilegia+canadensis_+columbine_+red+columbine__WildSeedProject_%C2%A9+Heather+McCargo-25-smartpreview.jpg?format=2500w
            './assets/wild-columbine-4.jpg', // https://www.minnesotawildflowers.info/udata/r9ndp23q/red/red-columbine-100_5792.jpg
            './assets/wild-columbine-5.jpg', // https://www.minnesotawildflowers.info/udata/r9ndp23q/red/aquilegia-canadensis-red-columbine_0423_130045.jpg
        ]
    }
];
const gardenLayout = {
    "nameAbbreviations": {
        "Alum": "Alum Root",
        "Bee": "Bee Balm",
        "CarexB": "Carex Brevior",
        "CarexS": "Carex Sparganoides",
        "Lance": "Lance leaf coreopsis",
        "Lead": "Lead Plant",
        "Aster": "New England Aster",
        "Purple": "Purple love grass",
        "Rough": "Rough Blazing Star",
        "Shrubby": "Shrubby St. John’s Wort",
        "Wort": "Shrubby St. John’s Wort",
        "Swamp": "Swamp Milkweed",
        "3": "Three-awned Grass",
        "Mint": "Virginia Mountain Mint",
        "Columbine": "Wild Columbine",
        "<empty>": null
    },
    // 5 rows, 8 columns (Landscape Layout)
    rows: [
        ["<switch-view>", "Alum", "Alum", "Purple", "Aster", "Columbine", "CarexS", "<empty>"],
        ["Lance", "Alum", "Lead", "3", "Bee", "CarexB", "Shrubby", "Lance"],
        ["Columbine", "3", "Rough", "Swamp", "Swamp", "Rough", "CarexS", "Columbine"],
        ["CarexS", "Wort", "CarexB", "Bee", "3", "Lead", "Mint", "Purple"],
        ["Lance", "Purple", "Columbine", "Aster", "CarexB", "Mint", "Mint", "Columbine"]
    ]
};

// Generate Alphabetical Layout (4x4)
function getAlphabeticalLayout() {
    const sortedPlants = [...plants].sort((a, b) => a.name.localeCompare(b.name));
    const sortedKeys = sortedPlants.map(p => {
        return Object.keys(gardenLayout.nameAbbreviations).find(key => gardenLayout.nameAbbreviations[key] === p.name);
    }).filter(key => key); // Filter out any undefined keys if mapping fails

    const layout = [];
    let currentRow = ["<switch-view>"]; // Start with button

    sortedKeys.forEach(key => {
        if (currentRow.length === 4) {
            layout.push(currentRow);
            currentRow = [];
        }
        currentRow.push(key);
    });

    // Fill remaining cells in current row
    while (currentRow.length < 4) {
        currentRow.push("<empty>");
    }
    layout.push(currentRow);

    // Fill remaining rows to make it 4x4 if needed (though 15 items + 1 button = 16, exactly 4 rows)
    while (layout.length < 4) {
        layout.push(["<empty>", "<empty>", "<empty>", "<empty>"]);
    }

    return layout;
}

const alphabeticalLayout = getAlphabeticalLayout();

const gardenGrid = document.getElementById('gardenGrid');
const plantModal = document.getElementById('plantModal');
const closeModal = document.getElementById('closeModal');
const modalTitle = document.getElementById('modalTitle');
const modalHeight = document.getElementById('modalHeight');
const modalImages = document.getElementById('modalImages');
const rotationAlert = document.getElementById('rotationAlert');

function getPlantData(shortName) {
    if (!shortName || shortName === "<empty>" || shortName === "<switch-view>") return null;
    const fullName = gardenLayout.nameAbbreviations[shortName];
    return plants.find(p => p.name === fullName);
}

function transpose(matrix) {
    return matrix[0].map((col, i) => matrix.map(row => row[i]));
}

let lastIsLandscape = null;
let viewMode = 'garden'; // 'garden' or 'list'

function renderGrid() {
    const isLandscape = window.innerWidth > window.innerHeight;

    // Check for rotation (only relevant for garden view really, but good to keep)
    if (lastIsLandscape !== null && lastIsLandscape !== isLandscape && viewMode === 'garden') {
        showRotationAlert();
    }
    lastIsLandscape = isLandscape;

    let layout;
    if (viewMode === 'garden') {
        layout = isLandscape ? gardenLayout.rows : transpose(gardenLayout.rows);
    } else {
        layout = alphabeticalLayout;
    }

    const rows = layout.length;
    const cols = layout[0].length;

    // Update CSS variables
    document.documentElement.style.setProperty('--grid-rows', rows);
    document.documentElement.style.setProperty('--grid-cols', cols);

    gardenGrid.innerHTML = '';

    layout.forEach(row => {
        row.forEach(shortName => {
            const cell = document.createElement('div');
            cell.className = 'plant-cell';

            if (shortName === "<switch-view>") {
                cell.classList.add('empty-cell'); // Visually empty background
                cell.style.display = 'flex';
                cell.style.alignItems = 'center';
                cell.style.justifyContent = 'center';

                const btn = document.createElement('button');
                btn.textContent = (viewMode==='garden') ? "Show 14 Plants" : "Show Planted Layout";
                btn.className = "switch-view-btn";
                btn.onclick = () => {
                    viewMode = viewMode === 'garden' ? 'list' : 'garden';
                    renderGrid();
                };
                cell.appendChild(btn);
                gardenGrid.appendChild(cell);
                return;
            }

            const plant = getPlantData(shortName);

            if (plant) {
                // Use first gallery image as thumbnail, or placeholder
                const thumbUrl = (plant.gallery && plant.gallery.length > 0) ? plant.gallery[0] : `https://placehold.co/200x200/2d2d2d/aaddaa?text=${encodeURIComponent(plant.name.split(' ')[0])}`;

                cell.innerHTML = `
                    <div class="plant-header">
                        <span class="plant-name">${plant.name}</span>
                        <span class="plant-height">${plant.height}</span>
                    </div>
                    <img src="${thumbUrl}" alt="${plant.name}" class="plant-thumbnail">
                `;
                cell.addEventListener('click', () => openModal(plant));
            } else {
                cell.classList.add('empty-cell');
                cell.style.visibility = 'hidden'; // Or just empty
            }

            gardenGrid.appendChild(cell);
        });
    });
}

function showRotationAlert() {
    rotationAlert.classList.add('show');
    setTimeout(() => {
        rotationAlert.classList.remove('show');
    }, 2000);
}

// Initial Render
renderGrid();

// Re-render on resize
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(renderGrid, 100);
});

// Preload images
function preloadImages() {
    plants.forEach(plant => {
        if (plant.gallery) {
            plant.gallery.forEach(url => {
                const img = new Image();
                img.src = url;
            });
        }
    });
}

// Start preloading after initial render
setTimeout(preloadImages, 1000);

// Modal Logic
function openModal(plant) {
    modalTitle.textContent = plant.name;

    let otherNamesHtml = '';
    if (plant.otherNames && plant.otherNames.length > 0) {
        otherNamesHtml = `<div style="font-style: italic; font-size: 0.9em; margin-bottom: 5px;">(${plant.otherNames.join(', ')})</div>`;
    }

    let hasMsuLink = false;
    let hasMnWildflowersLink = false;

    let linksHtml = '';
    if (plant.links && plant.links.length > 0) {
        hasMsuLink = plant.links.some(l => l.includes('canr.msu.edu/nativeplants/plant_facts/'));
        hasMnWildflowersLink = plant.links.some(l => l.includes('minnesotawildflowers.info'));

        linksHtml = plant.links.map(link => {
            let label = "More Info";
            try {
                const urlObj = new URL(link);
                label = urlObj.hostname.replace('www.', '');
            } catch (e) {
                // Keep default label
            }
            if (label === "canr.msu.edu") label = "MSU Native Plants";
            if (label === "minnesotawildflowers.info") label = "Minnesota Wildflowers";
            return `<div style="margin-bottom: 5px;"><a href="${link}" target="_blank" class="search-link" style="font-size: 0.9rem;">${label}</a></div>`;
        }).join('');
    }

    let msuSearchHtml = '';
    if (!hasMsuLink) {
        msuSearchHtml = `
        <div style="margin-bottom: 10px;">
            <a href="https://www.google.com/search?q=site%3Ahttps%3A%2F%2Fwww.canr.msu.edu%2Fnativeplants%2Fplant_facts%2F+${encodeURIComponent(plant.name)}" target="_blank" class="search-link" style="font-size: 0.9rem;">MSU Native Plants</a>
        </div>`;
    }

    let mnWildflowersSearchHtml = '';
    if (!hasMnWildflowersLink) {
        mnWildflowersSearchHtml = `
        <div style="margin-bottom: 10px;">
            <a href="https://www.minnesotawildflowers.info/search?kw=${encodeURIComponent(plant.name)}" target="_blank" class="search-link" style="font-size: 0.9rem;">Minnesota Wildflowers</a>
        </div>`;
    }

    modalHeight.innerHTML = `
        <div style="font-style: italic; margin-bottom: 5px;">${plant.scientificName}
            <a href="https://www.google.com/search?tbm=isch&q=${encodeURIComponent(`${plant.name} ${plant.scientificName}`)}" target="_blank" class="search-link-small">🔍</a>
        </div>
        ${otherNamesHtml}
        ${msuSearchHtml}
        ${mnWildflowersSearchHtml}
        ${linksHtml}
        Mature Height: ${plant.height}
    `;
    modalImages.innerHTML = '';

    const gallery = plant.gallery || [];

    if (gallery.length === 0) {
        // Show placeholder if no images
        const container = document.createElement('div');
        container.className = 'modal-image-container';
        const img = document.createElement('img');
        img.className = 'modal-image';
        img.src = `https://placehold.co/800x600/1a1a1a/aaddaa?text=${encodeURIComponent(plant.name)}`;
        img.alt = plant.name;
        container.appendChild(img);
        modalImages.appendChild(container);
    } else {
        gallery.forEach(url => {
            const container = document.createElement('div');
            container.className = 'modal-image-container';

            const img = document.createElement('img');
            img.className = 'modal-image';
            img.src = url;
            img.alt = plant.name;

            container.appendChild(img);
            modalImages.appendChild(container);
        });
    }

    plantModal.classList.add('show');
    // document.body.style.overflow = 'hidden'; // No longer needed since modal is smaller
}

closeModal.addEventListener('click', () => {
    plantModal.classList.remove('show');
    // setTimeout(() => { plantModal.style.display = 'none'; }, 300); // Wait for transition
});

// Close on click outside
plantModal.addEventListener('click', (e) => {
    if (e.target === plantModal) {
        plantModal.classList.remove('show');
    }
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && plantModal.classList.contains('show')) {
        plantModal.classList.remove('show');
    }
});
