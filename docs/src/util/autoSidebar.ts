import { join, resolve } from 'node:path';
import matter from 'gray-matter';
import fg from 'fast-glob';
import fs from 'node:fs';

export interface Options {
    base: string;
    title?: string;
    collapsed?: boolean;
}

export const DIR_ROOT = resolve(__dirname, '../../../');
export const DIR_SRC = resolve(DIR_ROOT, 'docs/src');

export function fastGlobSync(type: string, dir: string, ignore: string[] = []) {
    const files = fg.sync('*', {
        onlyDirectories: type === 'dir',
        onlyFiles: type === 'file',
        cwd: dir,
        // deep: Infinity,
        ignore: [
            '_*',
            'dist',
            'node_modules',
            ...ignore,
        ],
    });
    files.sort();
    return files;
}

export const dirs = fastGlobSync('dir', DIR_SRC);
console.log(dirs,33)

const getSidebar = (dir: string, title: string | undefined) => {
    const curDir = resolve(DIR_SRC, dir);
    const dirs = fastGlobSync('dir', curDir);
    const res: any = [];
    if (dirs.length) {
        // TODO 多级目录
        dirs.forEach((e) => {
            const childDir = resolve(curDir, e);
            const mdFiles = fastGlobSync('file', childDir);
            console.log(e.slice(e.indexOf(".") + 1), 33);
            console.log(e.indexOf("."), 44);
            const sidebar = {
                // text: e.includes(".")
                //     ?
                //     (e.slice(e.indexOf(".") + 1).charAt(0).toUpperCase() + e.slice(e.indexOf(".") + 2)).replace(/-/ig, " ")
                //     :
                //     (e.charAt(0).toUpperCase() + e.slice(1)).replace(/-/ig, ' '),
                text: e.includes(".") ? e.slice(e.indexOf(".")+1).replace(/-/ig, ' '): e.slice(0).replace(/-/ig, ' '),
                collapsed: false,
                items: [] as any,
            };
            mdFiles.forEach((file) => {
                if (file.endsWith('.md')) {
                    let prePath = join('/', dir, e, file);
                    if (file === 'index.md')
                        prePath = join('/', dir, e, '/');

                    const item = {
                        text: file.slice(0, -3),
                        link: prePath,
                    };
                    sidebar.items.push(item);
                }
            });
            res.push(sidebar);
        });
    }
    else {
        const mdFiles = fastGlobSync('file', curDir);
        const sidebar = {
            text: title,
            collapsed: false,
            items: [] as any,
        };
        mdFiles.filter(e => e !== 'index.md').forEach((file) => {
            if (file.endsWith('.md')) {
                const prePath = join('/', dir, file);
                const curDir = resolve(DIR_SRC, dir);
                const mdPath = resolve(curDir, file);
                const mdRaw = fs.readFileSync(mdPath, 'utf-8');
                const { content: md } = matter(mdRaw);
                const mdLine = md.split('\n').slice(0, 6);
                const mdTitle = mdLine.filter(e => e.match(/^#\s*/))[0]?.replace('#', '').trim();
                const item = {
                    text: mdTitle || file.slice(0, -3),
                    link: prePath,
                };
                sidebar.items.push(item);
            }
        });
        res.push(sidebar);
    }
    return res;
};

export const autoSidebar = (options: Options) => {
    options.collapsed = options?.collapsed ?? false;
    if (options.base !== '/') {
        const dir = dirs.filter((dir: string) => dir.includes(options.base))[0];
        console.log(dir,22)
        if (dir) {
            const sidebar = getSidebar(dir, options.base);
            console.log(sidebar,11)
            return sidebar;
        }
    }
};
// autoSidebar({base:'html'})

// export default (options: Options) => {
//     options.collapsed = options?.collapsed ?? false;
//     if (options.base !== '/') {
//         const dir = dirs.filter((dir: string) => dir.includes(options.base))[0];
//         if (dir) {
//             const sidebar = getSidebar(dir, options.title);
//             return sidebar;
//         }
//     }
// };