import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";

import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const pblshQuest = questions.filter(
        (questions: Question): boolean => questions.published
    );
    return pblshQuest;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const nonEmptyQuest = questions.filter((questions: Question): boolean =>
        questions.body.length === 0 &&
        questions.expected.length === 0 &&
        questions.options.length === 0
            ? false
            : true
    );
    return nonEmptyQuest;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const foundQuest = questions.filter(
        (questions: Question): boolean => questions.id === id
    );
    if (foundQuest.length === 0) {
        return null;
    } else {
        return foundQuest[0];
    }
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const newQuests = questions.filter((questions: Question): boolean =>
        questions.id === id ? false : true
    );
    return newQuests;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const questNames = questions.map(
        (questions: Question): string => questions.name
    );
    return questNames;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const indivPoints = questions.map(
        (questions: Question): number => questions.points
    );
    const sum = indivPoints.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );

    return sum;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const pblshQuest = questions.filter(
        (questions: Question): boolean => questions.published
    );
    const indivPoints = pblshQuest.map(
        (pblshQuest: Question): number => pblshQuest.points
    );
    const sum = indivPoints.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    return sum;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    const questCSV = questions
        .map(
            (question: Question): string =>
                `${question.id},${question.name},${question.options.length},${question.points},${question.published}`
        )
        .join("\n");
    const ret_str = `${"id,name,options,points,published"}\n${questCSV} `;
    return ret_str;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const newAnswers: Answer[] = questions.map((question) => ({
        questionId: question.id,
        text: "",
        submitted: false,
        correct: false
    }));
    return newAnswers;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const allPblsh: Question[] = questions.map((question) => ({
        ...question,
        published: true
    }));
    return allPblsh;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    if (questions.length === 0) {
        return true;
    }
    const type1 = questions[0].type;

    return questions.every((question) => question.type === type1);
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const nextQuest = makeBlankQuestion(id, name, type);
    const newQuests = { ...questions };
    newQuests.push(nextQuest);
    return newQuests;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    const newQuest = questions.map(
        (questions: Question): Question =>
            questions.id === targetId
                ? { ...questions, name: newName }
                : questions
    );
    return newQuest;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    const newQuests = questions.map(
        (questions: Question): Question =>
            questions.id === targetId
                ? { ...questions, type: newQuestionType, options: [] }
                : questions
    );
    return newQuests;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    const newQuests = { ...questions };
    const nextQuest = newQuests.map(
        (newQuests: Question): Question =>
            newQuests.id === targetId
                ? {
                      ...newQuests,
                      options:
                          targetId === -1
                              ? [...newQuests.options, newOption]
                              : [...newQuests.options]
                  }
                : newQuests
    );
    if (targetOptionIndex !== -1) {
        nextQuest[targetId].options.splice(targetOptionIndex, 1, newOption);
    }
    return nextQuest;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const newQuest = { ...questions };
    const dupQuest = duplicateQuestion(newId, newQuest[targetId]);
    const nextQuest = newQuest.splice(targetId, 0, dupQuest);

    return nextQuest;
}
