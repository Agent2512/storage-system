import { Card, CardProps } from "./Card";

export const Block8 = (p: {
    card1: CardProps,
    card2: CardProps,
    card3: CardProps,
    card4: CardProps,
    card5: CardProps,
    card6: CardProps,
    card7: CardProps,
    card8: CardProps,
}) => (
    <section class="gap-4 grid grid-cols-2 grid-rows-4" >
        <Card {...p.card1} />
        <Card {...p.card2} />
        <Card {...p.card3} />
        <Card {...p.card4} />
        <Card {...p.card5} />
        <Card {...p.card6} />
        <Card {...p.card7} />
        <Card {...p.card8} />
    </section>
);

export const Block4 = (p: {
    children?: any,

    card1: CardProps,
    card2: CardProps,
    card3: CardProps,
    card4: CardProps,
}) => (
    <section class="gap-4 grid grid-cols-2 grid-rows-4" >
        <div class="col-span-2 row-span-2">
            {p.children}
        </div>
        <Card {...p.card1} />
        <Card {...p.card2} />
        <Card {...p.card3} />
        <Card {...p.card4} />
    </section>
);

export const Block3 = (p: {
    children?: any,

    card1: CardProps,
    card2: CardProps,
    card3: CardProps,
}) => (
    <section class="gap-4 grid grid-cols-2 grid-rows-4" >
        <div class="col-span-2 row-span-2">
            {p.children}
        </div>
        <Card {...p.card1} />
        <Card {...p.card2} />
        <Card {...p.card3} />
    </section>
);

export const Block2 = (p: {
    children?: any,

    card1: CardProps,
    card2: CardProps,
}) => (
    <section class="gap-4 grid grid-cols-2 grid-rows-4" >
        <div class="col-span-2 row-span-3">
            {p.children}
        </div>
        <Card {...p.card1} />
        <Card {...p.card2} />
    </section>
);

export const Block1 = (p: {
    children?: any,

    card1: CardProps,
}) => (
    <section class="gap-4 grid grid-cols-2 grid-rows-4" >
        <div class="col-span-2 row-span-3">
            {p.children}
        </div>
        <Card {...p.card1} />
    </section>
);

export const BlockInline1 = (p: {

    card1: CardProps,
}) => (
    <section class="gap-4 flex justify-center items-center flex-col" >

        <Card {...p.card1} />
    </section>
);

export const BlockInline2 = (p: {

    card1: CardProps,
    card2: CardProps,
}) => (
    <section class="gap-4 flex justify-center items-center flex-col" >

        <Card {...p.card1} />
        <Card {...p.card2} />
    </section>
);

export const BlockInline3 = (p: {

    card1: CardProps,
    card2: CardProps,
    card3: CardProps,
}) => (
    <section class="gap-4 flex justify-center items-center flex-col" >

        <Card {...p.card1} />
        <Card {...p.card2} />
        <Card {...p.card3} />
    </section>
);

export const BlockInline4 = (p: {

    card1: CardProps,
    card2: CardProps,
    card3: CardProps,
    card4: CardProps,
}) => (
    <section class="gap-4 flex justify-center items-center flex-col" >

        <Card {...p.card1} />
        <Card {...p.card2} />
        <Card {...p.card3} />
        <Card {...p.card4} />
    </section>
);