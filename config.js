
// 本文件是IP Website页面的整体配置，可根据个人喜好进行修改调整；
// This file contains the overall configuration for the IP website page and can be modified or adjusted according to personal preference;

window.SITE_CONFIG = {

  // 若想要修改下方文本，请直接在本页面内完成即可；
  // 若想要修改变量定义名称，请结合index.html文件内容进行修改；
  // To modify the text below, please edit it directly on this page;
  // To modify variable names, please make the changes in conjunction with the contents of index.html;

  profile: {
    name: "JaiMo",
    title: "JaiMo Homepage",
    avatar: "avatar.png",
    banner: "background.jpg",
    bio: "Building from first principles. Exploring quantitative systems.",
    version: "Version 1.0.0"
  },

  titles: {
    leftColumn: "🪴 Database",
    centerColumn: "🪵 Latest Articles",
    rightColumn: "📫 Connection"
  },
  
  leftColumn: [

    // items:[]内部项目可以自由增删，注意格式统一即可；
    // 不要忘记中间行末尾的逗号；
    // Items within the `items:[]` array can be added or removed freely; just ensure the formatting remains consistent;
    // Do not forget the commas at the end of intermediate lines;

    { category: "📊 Data Analysis",
      items: [
        { name: "Stock Price Simulation", url: "https://github.com/jaimoeth/jaimoeth/tree/main/DataAnalysis/StockPriceSimulation/SPSMath.ipynb" }
      ]
    },
    { category: "🐍 Python Tutorials",
      items: [
        { name: "LaTeX Notes", url: "https://github.com/jaimoeth/jaimoeth/tree/main/PythonTutorials/0LaTeXNotes.ipynb" },
        { name: "Python - English", url: "https://github.com/jaimoeth/jaimoeth/tree/main/PythonTutorials/1PythonEnglish.ipynb" },
        { name: "Python - Chinese", url: "https://github.com/jaimoeth/jaimoeth/tree/main/PythonTutorials/1PythonChinese.ipynb" },
        { name: "Numpy - Chinese", url: "https://github.com/jaimoeth/jaimoeth/tree/main/PythonTutorials/2NumpyChinese.ipynb" }
      ]
    },
    { category: "🔬 Open-source Research",
      items: [
        { name: "IP Website", url: "https://github.com/JaiMoDAO/ip-web" },
        { name: "Self Bank", url: "https://github.com/JaiMoDAO/self-bank" }
      ]
    }
  ],

  centerColumn: [

    // {}内部项目可以自由增删，注意格式统一即可；
    // 不要忘记中间行末尾的逗号；
    // Items within {} can be added or removed freely; just ensure the formatting is consistent;
    // Do not forget the commas at the end of intermediate lines;

    { tag: "Open-source Research",
      title: "Self Bank",
      url: "https://github.com/JaiMoDAO/self-bank",
      date: "2026/09/25",
      desc: "A Web3 sovereign banking protocol powered by ERC-4337, featuring gold-backed token accounting, on-chain invoicing, and zero-friction payroll."
    },
    { tag: "Open-source Research",
      title: "IP Website",
      url: "https://github.com/JaiMoDAO/ip-web",
      date: "2026/09/22",
      desc: "An open-source template for Web3 static blogs and personal knowledge bases, showcasing decentralized web practices that combine IPFS hosting with ENS domain binding."
    },
    { tag: "Python Tutorials",
      title: "Numpy - Chinese",
      url: "https://github.com/jaimoeth/jaimoeth/tree/main/PythonTutorials/2NumpyChinese.ipynb",
      date: "2026/09/21",
      desc: "Interactive guide covering core Python syntax, data structures, and functions for beginners."
    },
    { tag: "Data Analysis",
      title: "Stock Price Simulation",
      url: "https://github.com/jaimoeth/jaimoeth/tree/main/DataAnalysis/StockPriceSimulation/SPSMath.ipynb",
      date: "2026/09/20",
      desc: "From fundamental assumptions to the derivation of Stochastic Differential Equations (SDEs): The complete process of mathematical modeling and quantitative simulation for stock price generation functions."
    },
    { tag: "Python Tutorials",
      title: "LaTeX Notes",
      url: "https://github.com/jaimoeth/jaimoeth/tree/main/PythonTutorials/0LaTeXNotes.ipynb",
      date: "2026/09/18",
      desc: "A quick-reference guide to common LaTeX syntax and mathematical formula code, designed as a handy index for efficient typesetting and formula entry."
    }
  ],
  
  centerColumnFooter: "Showing 5 latest updates. Explore all topics in the <strong>{leftColumnTitle}</strong> on the left.",

  rightColumn: [

    // {}内部项目可以自由增删，注意格式统一即可；
    // badge栏目是图片公共链接，若想进行替换，可以替换为本地图片("picture1.jpg")，或咨询AI获取需要的官方图标链接；
    // 不要忘记中间项目末尾的逗号；
    // Items within the {} braces can be added or removed as desired; just ensure the formatting remains consistent;
    // The "badge" field contains public image links; you can replace them with local images (e.g., "picture1.jpg") or ask the AI ​​for the required official icon links;
    // Don't forget the commas at the end of the intermediate items;

    { name: "BlueSky",
      id: "JaiMo (@jaimo.eth.limo)",
      url: "https://bsky.app/profile/jaimo.eth.limo",
      badge: "https://img.shields.io/badge/-0085ff?style=flat-square&logo=bluesky&logoColor=white",
      alt: "Bluesky Icon"
    },
    { name: "X (Twitter)",
      id: "JaiMo (@jaimoeth)",
      url: "https://x.com/jaimoeth",
      badge: "https://img.shields.io/badge/-000000?style=flat-square&logo=x&logoColor=white",
      alt: "X Icon"
    },
    { name: "GitHub",
      id: "JaiMo ( jaimoeth)",
      url: "https://github.com/jaimoeth",
      badge: "https://img.shields.io/badge/-181717?style=flat-square&logo=github&logoColor=white",
      alt: "GitHub Icon"
    },
    { name: "JaiMoDAO",
      id: "GitHub Organization",
      url: "https://github.com/JaiMoDAO",
      badge: "avatar.png",
      alt: "GitHub Icon"
    },
    { name: "Gmail",
      id: "Direct Contact",
      url: "mailto:jaimoeth@gmail.com",
      badge: "https://img.shields.io/badge/-EA4335?style=flat-square&logo=gmail&logoColor=white",
      alt: "Gmail Icon"
    }
  ],

  footer: {
    title: "⚠️ Important Notices & Official Verification Channels",
    
    // 可选：如果文本中需要复用变量（如 {ens}、{verifyUrl}），可以在这里定义；
    // 如果不需要，可以删掉整个 vars 对象，或者自由扩展其他自定义变量；
    // 不要忘记中间行末尾的逗号；
    // Optional: Define variables here if they need to be reused in the text (e.g., {ens}, {verifyUrl});
    // If not needed, you can remove the entire `vars` object or add other custom variables;
    // Don't forget the commas at the end of the intermediate lines;

    vars: {
      ens: "jaimo.eth",
      verifyUrl: "https://jaimo.eth.xyz"
    },

    items: [

      // {}内部项目可以自由增删，注意格式统一即可；
      // 不要忘记中间项目末尾的逗号；
      // Items within {} can be added or removed freely; just ensure the formatting is consistent;
      // Do not forget the comma at the end of intermediate items;

      { type: "html",
        value: "<strong>防伪声明</strong>：请认准本 ENS 域名 <code>{ens}</code> 绑定的官方联系渠道。所有涉及资金、项目合作与私信通知，均以 <a href=\"{verifyUrl}\" target=\"_blank\">{verifyUrl}</a>（ENS 解析验证页面）公示的信息为准。"
      },
      { type: "html",
        value: "<strong>Anti-Fraud Statement</strong>: Please verify all official contact channels bound to the ENS domain <code>{ens}</code>. All matters regarding funds, project collaborations, and direct messages are subject to the information published on <a href=\"{verifyUrl}\" target=\"_blank\">{verifyUrl}</a> (ENS Resolution Page)."
      },
      { type: "text",
        prefix: "Origin of jaimo",
        value: "Coined directly from the precise pronunciation (jai-mo) of \"Jianmu\" (建木)—the cosmic world tree in Chinese mythology—serving as a unified digital identity across all platforms."
      },
      { type: "text",
        prefix: "Support Us",
        value: "USDC for jaimo.eth | EVM-compatible networks"
      }
    ]
  }
};
