window.KATACHI_PRODUCTS = [
  // 產品：分離乳清蛋白
  {
    id: 'whey-isolate',
    category: 'protein',
    categoryLabel: '高蛋白',
    name: '分離乳清蛋白',
    price: 1680,
    originalPrice: 1950,
    rating: 4.9,
    image: '/katachi-shop/img/Protein/myprotein.jpg',
    description: '每份 26g 蛋白質，乳糖較低、好沖泡，適合訓練後補充與日常拉高蛋白攝取。',
    options: [
      {
        label: '口味',
        values: [
            { text: '原味', image: '/katachi-shop/img/Protein/normal.png' },
          { text: '香草', image: '/katachi-shop/img/Protein/Vanilla.png' },
          { text: '巧克力', image: '/katachi-shop/img/Protein/chocolate.png' }
        ]
      },
      {
        label: '規格',
        values: [
          { text: '2LB', price: 1680, originalPrice: 1950 },
          { text: '5LB', price: 2980, originalPrice: 3380 }
        ]
      }
    ]
  },
  // 產品：夜間酪蛋白
  {
    id: 'casein',
    category: 'protein',
    categoryLabel: '高蛋白',
    name: '夜間酪蛋白',
    price: 1580,
    originalPrice: 1820,
    rating: 4.8,
      image: '/katachi-shop/img/dark whey protein/dark whey protein.jpg',
    description: '釋放速度較慢，適合睡前或兩餐間補充，讓整天蛋白質分配更穩定。',
    options: [
      {
        label: '口味',
        values: [
            { text: '原味', image: '/katachi-shop/img/dark whey protein/normal.png' },
          { text: '奶茶', image: '/katachi-shop/img/dark whey protein/mike tea.png' },
          { text: '巧克力', image: '/katachi-shop/img/dark whey protein/chocolate.png' }
        ]
      },
      {
        label: '規格',
        values: [
          { text: '2LB', price: 1580, originalPrice: 1820 },
          { text: '4LB', price: 2680, originalPrice: 3020 }
        ]
      }
    ]
  },
  // 產品：訓練前能量粉
  {
    id: 'pre-workout',
    category: 'performance',
    categoryLabel: '訓練補給',
    name: '訓練前能量粉',
    price: 1280,
    originalPrice: 1480,
    rating: 4.7,
      image: '/katachi-shop/img/Energy powder/Energy powder.jpg',
    description: '咖啡因與瓜胺酸配方，適合重量訓練前提升專注與發力感，晚間訓練者可斟酌使用。',
    options: [
      {
        label: '口味',
        values: [
            { text: '綜合莓果', image: '/katachi-shop/img/Energy powder/mixed berry.png' },
          { text: '葡萄', image: '/katachi-shop/img/Energy powder/grape.png' },
          { text: '草莓', image: '/katachi-shop/img/Energy powder/strawberry.png' }
        ]
      },
      {
        label: '刺激程度',
        values: [
          { text: '標準版', price: 1280, originalPrice: 1420 },
          { text: '高咖啡因版', price: 1580, originalPrice: 1780 }
        ]
      }
    ]
  },
  // 產品：支鏈胺基酸 BCAA
  {
    id: 'bcaa',
    category: 'performance',
    categoryLabel: '訓練補給',
    name: '支鏈胺基酸 BCAA',
    price: 980,
    originalPrice: 1180,
    rating: 4.6,
    image: '/katachi-shop/img/BCAA/lemon.png',
    description: '適合長時間訓練或減脂期搭配飲用，口感清爽，幫助補水與訓練中補給。',
    options: [
      {
        label: '口味',
        values: [
          { text: '檸檬', image: '/katachi-shop/img/BCAA/lemon.png' },
          { text: '水蜜桃', image: '/katachi-shop/img/BCAA/peach.png' },
          { text: '葡萄柚', image: '/katachi-shop/img/BCAA/grapefruit.png' }
        ]
      },
      {
        label: '容量',
        values: [
          { text: '30 servings', price: 980, originalPrice: 1180 },
          { text: '60 servings', price: 1680, originalPrice: 1980 }
        ]
      }
    ]
  },
  // 產品：高濃度魚油膠囊
  {
    id: 'fish-oil',
    category: 'wellness',
    categoryLabel: '日常營養',
    name: '高濃度魚油膠囊',
    price: 1180,
    originalPrice: 1360,
    rating: 4.8,
      image: '/katachi-shop/img/fishoil/product.png',
    description: '主打 EPA / DHA 含量清楚標示，適合平常飲食油脂攝取失衡的人做日常保養。',
    options: [
      {
        label: '容量',
        values: [
          { text: '90 顆', price: 1180, originalPrice: 1360 },
          { text: '180 顆', price: 1980, originalPrice: 2280 }
        ]
      },
      { label: '濃度', values: ['標準濃度', '高濃度'] }
    ]
  },
  // 產品：綜合維他命錠
  {
    id: 'multivitamin',
    category: 'wellness',
    categoryLabel: '日常營養',
    name: '綜合維他命錠',
    price: 880,
    originalPrice: 990,
    rating: 4.5,
    image: '/katachi-shop/img/vitamin2.png',
    description: '針對訓練者常見的基礎營養補充需求設計，適合忙碌、外食比例高的日常使用。',
    options: [
      {
        label: '容量',
        values: [
          { text: '30 日份', price: 880, originalPrice: 990 },
          { text: '60 日份', price: 1480, originalPrice: 1680 }
        ]
      },
      { label: '配方', values: ['基礎版', '加強版'] }
    ]
  },
  // 產品：微粉化肌酸
  {
    id: 'creatine',
    category: 'performance',
    categoryLabel: '訓練補給',
    name: '微粉化肌酸',
    price: 980,
    originalPrice: 1180,
    rating: 4.9,
    image: '/katachi-shop/img/creatine/normal.png',
    description: '無香料設計，易混合、易堆疊，適合力量訓練與高強度間歇週期使用。',
    options: [
      {
        label: '口味',
        values: [
          { text: '無香料', image: '/katachi-shop/img/creatine/no spices.png' },
          { text: '檸檬', image: '/katachi-shop/img/creatine/lemon.png' },
        ]
      },
      {
        label: '規格',
        values: [
          { text: '300g', price: 980, originalPrice: 1180 },
          { text: '500g', price: 1480, originalPrice: 1720 }
        ]
      }
    ]
  },
  // 產品：刻度搖搖杯
  {
    id: 'shaker-bottle',
    category: 'accessories',
    categoryLabel: '沖泡配件',
    name: '刻度搖搖杯',
    price: 420,
    originalPrice: 520,
    rating: 4.4,
    image: '/katachi-shop/img/cup/black.jpg',
    description: '附刻度與濾網，適合乳清、肌酸與訓練中飲品使用，外出攜帶也比較直覺。',
    options: [
      {
        label: '顏色',
        values: [
          { text: '霧黑', image: '/katachi-shop/img/cup/black.jpg' },
          { text: '透明白', image: '/katachi-shop/img/cup/white.png' },
          { text: '石墨灰', image: '/katachi-shop/img/cup/gray.png' }
        ]
      },
      {
        label: '容量',
        values: [
          { text: '700ml', price: 399, originalPrice: 520 },
          { text: '1000ml', price: 520, originalPrice: 620 }
        ]
      }
    ]
  }
];
function renderShopProductsFromData() {
    const productGrid = document.getElementById('productGrid');
    const products = Array.isArray(window.KATACHI_PRODUCTS) ? window.KATACHI_PRODUCTS : [];

    if (!productGrid || products.length === 0) return;

    const currency = new Intl.NumberFormat('zh-TW');
    const escapeHtml = (value) => String(value ?? '')
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#039;');

    const getCategoryFallbackImage = (category) => {
        const fallbackImages = {
            protein: '/katachi-shop/img/Protein/protein.jpg',
            performance: '/katachi-shop/img/Energy powder/Energy powder.jpg',
            wellness: '/katachi-shop/img/fishoil/product.png',
            accessories: '/katachi-shop/img/cup/black.jpg'
        };

        return fallbackImages[category] || '/katachi-shop/img/Protein/protein.jpg';
    };

    productGrid.innerHTML = products.map((product, index) => {
        const id = escapeHtml(product.id);
        const category = escapeHtml(product.category);
        const name = escapeHtml(product.name);
        const categoryLabel = escapeHtml(product.categoryLabel);
        const description = escapeHtml(product.description || product.subtitle || '');
        const price = Number(product.price || 0);
        const originalPrice = product.originalPrice ? Number(product.originalPrice) : 0;
        const rating = product.rating ?? '';
        const fallbackImage = getCategoryFallbackImage(product.category);
        const image = product.image || fallbackImage;
        const stock = Number(product.stock ?? 0);

        return `
      <article class="product-card" data-id="${id}" data-category="${category}" data-name="${name}"
        data-price="${price}" data-rating="${escapeHtml(rating)}" data-stock="${stock}"
        data-order="${index}" role="link" tabindex="0">
        <div class="product-thumb">
          <img src="${escapeHtml(image)}" alt="${name}" onerror="this.onerror=null;this.src='${escapeHtml(fallbackImage)}'">
        </div>
        <div class="product-body">
          <div class="product-meta"><span>${categoryLabel}</span><span>${escapeHtml(rating)}</span></div>
          <h2 class="product-name">${name}</h2>
          <p class="product-desc">${description}</p>
          <div class="product-footer">
            <div class="product-price">${currency.format(price)} ${originalPrice ? `<span>${currency.format(originalPrice)}</span>` : ''}</div>

          <div class="product-stock ${stock <= 0 ? 'is-soldout' : stock <= 5 ? 'is-low' : ''}">
                ${stock <= 0 ? '售完' : stock <= 5 ? `低庫存 ${stock}` : '庫存充足'}</div>

            <button class="accent-btn add-cart-btn" type="button"
                ${stock <= 0 ? 'disabled' : ''}>
                ${stock <= 0 ? '售完' : '加入購物車'}
                </button>

          </div>
        </div>
      </article>
    `;
    }).join('');

    window.dispatchEvent(new CustomEvent('shop-products-rendered'));
}

window.renderShopProductsFromData = renderShopProductsFromData;

function mergeProductOptions(apiOptions, staticOptions) {
    if (!Array.isArray(apiOptions) || apiOptions.length === 0) {
        return Array.isArray(staticOptions) ? staticOptions : [];
    }

    return apiOptions.map(apiOption => {
        const staticOption = (staticOptions || []).find(option => option.label === apiOption.label);
        const staticValues = Array.isArray(staticOption?.values) ? staticOption.values : [];
        const apiValues = Array.isArray(apiOption.values) ? apiOption.values : [];

        return {
            ...apiOption,
            values: apiValues.map(apiValue => {
                const apiText = typeof apiValue === 'object' ? apiValue.text : apiValue;
                const staticValue = staticValues.find(value => {
                    const staticText = typeof value === 'object' ? value.text : value;
                    return staticText === apiText;
                });

                if (typeof apiValue !== 'object') {
                    return staticValue || apiValue;
                }

                if (typeof staticValue !== 'object') {
                    return apiValue;
                }

                return {
                    ...staticValue,
                    ...apiValue,
                    price: apiValue.price ?? staticValue.price,
                    originalPrice: apiValue.originalPrice ?? staticValue.originalPrice,
                    image: apiValue.image || staticValue.image
                };
            })
        };
    });
}

// API 模擬：從後端 API 載入產品資料
window.loadShopProductsFromApi = async function () {
    try {
        const response = await fetch('/api/shop/products');

        if (!response.ok) {
            throw new Error('Failed to load products');
        }

        const apiProducts = await response.json();

        if (Array.isArray(apiProducts) && apiProducts.length > 0) {
            const apiProductMap = new Map(apiProducts.map(product => [product.id, product]));
            const staticProducts = Array.isArray(window.KATACHI_PRODUCTS) ? window.KATACHI_PRODUCTS : [];
            const mergedProducts = staticProducts.map(staticProduct => {
                const apiProduct = apiProductMap.get(staticProduct.id);
                if (!apiProduct) return staticProduct;

                const apiOptions = Array.isArray(apiProduct.options) ? apiProduct.options : [];
                const staticOptions = Array.isArray(staticProduct.options) ? staticProduct.options : [];

                return {
                    ...staticProduct,
                    ...apiProduct,
                    stock: apiProduct.stock ?? staticProduct.stock ?? 0,
                    options: mergeProductOptions(apiOptions, staticOptions)
                };

            });

            apiProducts.forEach(apiProduct => {
                if (!mergedProducts.some(product => product.id === apiProduct.id)) {
                    mergedProducts.push({
                        ...apiProduct,
                        options: apiProduct.options || []
                    });
                }
            });

            window.KATACHI_PRODUCTS = mergedProducts;
        }

        renderShopProductsFromData();
        return window.KATACHI_PRODUCTS;
    } catch (error) {
        console.error('Load products from API failed:', error);
        renderShopProductsFromData();
        return window.KATACHI_PRODUCTS;
    }
};

renderShopProductsFromData();
