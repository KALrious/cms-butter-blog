import Butter, { ButterStatic } from 'buttercms';

let butter: ButterStatic;

type Params = {
  page_size: number;
  page: number;
  tag_slug?: string;
  category_slug?: string;
};

const previewSetting = process.env.PREVIEW;
// make preview mode by default
const preview =
  previewSetting === 'true' || previewSetting === undefined ? true : false;

try {
  butter = Butter(process.env.NEXT_PUBLIC_BUTTER_CMS_API_KEY, preview);
} catch (e) {
  console.log(e);
}

const defaultPageSize = 100;
const defaultPostCount = 10;

//TODO: add type here
export async function getLandingPage(slug) {
  try {
    const page = await butter.page.retrieve('landing-page', slug);

    return page?.data?.data;
  } catch (e) {
    throw e.response.data.detail;
  }
}

export async function getLandingPages() {
  let paginatedLandingPages = [];
  let currentPage = 1;
  console.log('toto');
  while (!!currentPage) {
    const landingPagesData = await getLandingPagesData(currentPage);
    paginatedLandingPages.push(...landingPagesData.pages);
    currentPage = landingPagesData.nextPage;
  }

  return paginatedLandingPages;
}

async function getLandingPagesData(page: number, pageSize = defaultPageSize) {
  try {
    const params = {
      page,
      page_size: pageSize,
    } as Params;
    console.log('landing pages params', params);
    const response = await butter.page.list('landing-page', params);
    console.log('landing pages response', response);
    return {
      pages: response?.data?.data as { slug: string }[],
      prevPage: response?.data?.meta.previous_page as number | null,
      nextPage: response?.data?.meta.next_page as number | null,
    };
  } catch (e) {
    throw e.response.data.detail;
  }
}

export async function getPostsData({
  page = 1,
  pageSize = defaultPostCount,
  tag,
  category,
}: {
  page?: number;
  pageSize?: number;
  tag?: string;
  category?: string;
}) {
  try {
    // https://buttercms.com/docs/api/node?javascript#get-your-blog-posts
    const params = {
      page_size: pageSize || defaultPostCount,
      page: page || 1,
    } as Params;

    if (tag) {
      params.tag_slug = tag;
    }

    if (category) {
      params.category_slug = category;
    }
    const response = await butter.post.list(params);

    return {
      posts: response?.data?.data,
      prevPage: response?.data?.meta.previous_page,
      nextPage: response?.data?.meta.next_page,
    };
  } catch (e) {
    throw e.response.data.detail;
  }
}

//TODO: add type here
export async function getPost(slug) {
  try {
    const response = await butter.post.retrieve(slug);

    return response?.data?.data;
  } catch (e) {
    throw e.response.data.detail;
  }
}

//TODO: add type here
export async function getMainMenu() {
  try {
    const response = await butter.content.retrieve(['navigation_menu']);

    const mainMenu = response?.data?.data?.navigation_menu.find(
      (menu) => menu.name == 'Main menu'
    );

    return mainMenu ? mainMenu.menu_items : [];
  } catch (e) {
    throw e.response.data.detail;
  }
}

//TODO: add type here
export async function getCategories() {
  try {
    const response = await butter.category.list();

    return response?.data?.data;
  } catch (e) {
    throw e.response.data.detail;
  }
}

//TODO: add type here
export async function getTags() {
  try {
    const response = await butter.tag.list();

    return response?.data?.data;
  } catch (e) {
    throw e.response.data.detail;
  }
}

//TODO: add type here
export async function searchPosts({ query }) {
  try {
    const response = await butter.post.search(query);

    return response?.data?.data;
  } catch (e) {
    throw e.response.data.detail;
  }
}
