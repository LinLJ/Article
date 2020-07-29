// 文章列表
export interface BLogParams {
    state: number; // 文章发布状态 => 0 草稿，1 已发布,'' 代表所有文章
    tagId: string;
    pageNum: number;
    pageSize: number;
}
