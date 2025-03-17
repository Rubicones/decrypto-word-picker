"use client";

import WordCard from "@/components/WordCard";
import { WORDS_EN, WORDS_RU } from "@/utils/words";
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";

export default function Home() {
    const [state, setState] = useState<
        "GENERATE BLUE" | "HIDE BLUE" | "GENERATE RED" | "HIDE RED" | "NEW GAME"
    >("GENERATE BLUE");
    const usedWords: string[] = [];
    const [lang, setLang] = useState<"EN" | "RU">("RU");
    const [words, setWords] = useState({
        blue: {
            1: "",
            2: "",
            3: "",
            4: "",
            isHidden: false,
        },
        red: {
            1: "",
            2: "",
            3: "",
            4: "",
            isHidden: false,
        },
    });
    const pickRandomWord = () => {
        const WORDS = lang === "EN" ? WORDS_EN : WORDS_RU;
        const randomIndex = Math.floor(Math.random() * WORDS.length);
        const randomWord = WORDS[randomIndex];
        if (usedWords.includes(randomWord)) {
            return pickRandomWord();
        }
        usedWords.push(randomWord);
        return randomWord;
    };

    return (
        <div className='w-full flex flex-col justify-center items-center bg-white'>
            <div className='w-full text-center bg-[#DF5A4E] flex items-center justify-center border-y-10 border-[#3F5374] shadowedTextBlue'>
                <span className='text-6xl font-[family-name:var(--font-architectural)] text-white translate-y-1 font-bold '>
                    Decrypto word picker
                </span>
            </div>

            <div className="w-full flex justify-center gap-2 mt-6">
                <button
                    className={`${
                        lang === "EN"
                            ? "bg-[#DF5A4E] text-[#3F5374]"
                            : "bg-[#3F5374] text-[#DF5A4E]"
                    } w-fit self-center  px-4 rounded-md border-6 border-[#3F5374] cursor-pointer`}
                    onClick={() => {
                        setLang("EN");
                    }}
                >
                    <span className={`shadowedTextBlue text-6xl font-[family-name:var(--font-architectural)] ${lang === "EN" ? 'text-white' : 'text-neutral-300'} mt-2 block font-bold `}>
                    EN
                    </span>
                </button>
                <button
                    className={`${
                        lang === "RU"
                            ? "bg-[#DF5A4E] text-[#3F5374]"
                            : "bg-[#3F5374] text-[#DF5A4E]"
                    } w-fit self-center  px-4 rounded-md border-6 border-[#3F5374] cursor-pointer`}
                    onClick={() => {
                        setLang("RU");
                    }}
                >
                    <span className={`shadowedTextBlue text-6xl font-[family-name:var(--font-architectural)] ${lang === "RU" ? 'text-white' : 'text-neutral-300'} mt-2 block font-bold `}>
                        RU
                    </span>
                </button> 
            </div>

            <div className='w-full max-w-[1200px] flex items-center flex-col'>
                <div className='w-full flex gap-2 items-center justify-center mt-10'>
                    <span className='text-6xl font-[family-name:var(--font-architectural)] text-[#3F5374] translate-y-1 font-bold '>
                        Blue Team
                    </span>
                    <button
                        className='cursor-pointer'
                        disabled={words.blue["1"] === ""}
                        onClick={() => {
                            setWords({
                                ...words,
                                blue: {
                                    ...words.blue,
                                    isHidden: !words.blue.isHidden,
                                },
                            });
                        }}
                    >
                        {words.blue.isHidden ? (
                            <EyeClosed size='64' className='text-[#3F5374]' />
                        ) : (
                            <Eye size='64' className='text-[#3F5374]' />
                        )}
                    </button>
                </div>
                <div className='w-full flex flex-row carouselContainer overflow-x-scroll no-scrollbar overflow-y-hidden'>
                    <WordCard
                        cardNo={1}
                        word={words.blue["1"]}
                        isHidden={words.blue.isHidden}
                    />
                    <WordCard
                        cardNo={2}
                        word={words.blue["2"]}
                        isHidden={words.blue.isHidden}
                    />
                    <WordCard
                        cardNo={3}
                        word={words.blue["3"]}
                        isHidden={words.blue.isHidden}
                    />
                    <WordCard
                        cardNo={4}
                        word={words.blue["4"]}
                        isHidden={words.blue.isHidden}
                    />
                </div>

                <div className='my-6 w-full text-center text-3xl font-semibold flex flex-col item-center gap-2 px-2'>
                    <span>
                        {state.includes("GENERATE") && (
                            <>
                                Pass the phone to the{" "}
                                <span
                                    className={`${
                                        state === "GENERATE BLUE"
                                            ? "text-[#3F5374]"
                                            : "text-[#DF5A4E]"
                                    }`}
                                >
                                    {state === "GENERATE BLUE"
                                        ? " blue"
                                        : " red"}
                                </span>{" "}
                                team
                            </>
                        )}
                        {state.includes("HIDE") && (
                            <>Write down the words and press the button below</>
                        )}
                        {state.includes("NEW GAME") && (
                            <>Press the button below to generate new words</>
                        )}
                    </span>
                    <button
                        className='bg-[#DF5A4E] w-fit self-center  px-4 rounded-md border-6 border-[#3F5374] cursor-pointer'
                        onClick={() => {
                            if (state === "GENERATE BLUE") {
                                setWords({
                                    ...words,
                                    blue: {
                                        1: pickRandomWord(),
                                        2: pickRandomWord(),
                                        3: pickRandomWord(),
                                        4: pickRandomWord(),
                                        isHidden: false,
                                    },
                                });

                                setState("HIDE BLUE");
                                return;
                            }
                            if (state === "GENERATE RED") {
                                setWords({
                                    ...words,
                                    red: {
                                        1: pickRandomWord(),
                                        2: pickRandomWord(),
                                        3: pickRandomWord(),
                                        4: pickRandomWord(),
                                        isHidden: false,
                                    },
                                });

                                setState("HIDE RED");
                                return;
                            }
                            if (state === "HIDE BLUE") {
                                setState("GENERATE RED");

                                setWords({
                                    blue: {
                                        ...words.blue,
                                        isHidden: true,
                                    },
                                    red: {
                                        ...words.red,
                                        isHidden: false,
                                    },
                                });
                                return;
                            }
                            if (state === "HIDE RED") {
                                setState("NEW GAME");
                                words.red.isHidden = true;
                                return;
                            }
                            if (state === "NEW GAME") {
                                setState("GENERATE BLUE");
                                setWords({
                                    blue: {
                                        1: "",
                                        2: "",
                                        3: "",
                                        4: "",
                                        isHidden: false,
                                    },
                                    red: {
                                        1: "",
                                        2: "",
                                        3: "",
                                        4: "",
                                        isHidden: false,
                                    },
                                });
                                return;
                            }
                        }}
                    >
                        <span className='shadowedTextBlue text-6xl font-[family-name:var(--font-architectural)] text-white mt-2 block font-bold '>
                            {state.includes("GENERATE") && "GENERATE"}
                            {state.includes("HIDE") && "HIDE"}
                            {state === "NEW GAME" && "NEW GAME"}
                        </span>
                    </button>
                </div>

                <div className='w-full flex flex-row carouselContainer overflow-x-scroll no-scrollbar'>
                    <WordCard
                        cardNo={1}
                        word={words.red["1"]}
                        isHidden={words.red.isHidden}
                    />
                    <WordCard
                        cardNo={2}
                        word={words.red["2"]}
                        isHidden={words.red.isHidden}
                    />
                    <WordCard
                        cardNo={3}
                        word={words.red["3"]}
                        isHidden={words.red.isHidden}
                    />
                    <WordCard
                        cardNo={4}
                        word={words.red["4"]}
                        isHidden={words.red.isHidden}
                    />
                </div>
                <div className='w-full flex gap-2 items-center justify-center mt-2'>
                    <span className='text-6xl font-[family-name:var(--font-architectural)] text-[#DF5A4E] translate-y-1 font-bold '>
                        Red team
                    </span>
                    <button
                        className='cursor-pointer'
                        disabled={words.red["1"] === ""}
                        onClick={() => {
                            setWords({
                                ...words,
                                red: {
                                    ...words.red,
                                    isHidden: !words.red.isHidden,
                                },
                            });
                        }}
                    >
                        {words.red.isHidden ? (
                            <EyeClosed size='64' className='text-[#DF5A4E]' />
                        ) : (
                            <Eye size='64' className='text-[#DF5A4E]' />
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
