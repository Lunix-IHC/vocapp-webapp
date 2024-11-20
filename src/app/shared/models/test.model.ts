export interface TestItem {
    question: string
    answer: number
}

export interface Test {
    id: string
    answers: TestItem[]
}