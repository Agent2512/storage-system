export interface CardProps {
    title: string;
    icon: string;
    link: string;
}


export const Card = (p: CardProps) => (
    <a href={p.link}>
        <div class="w-36 h-36 bg-blue-600 flex items-center justify-center flex-col gap-1 rounded">
            <i class={`gg-${p.icon}`}></i>
            <p>{p.title}</p>
        </div>
    </a>
);
