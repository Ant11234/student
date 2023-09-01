---
comments: true
layout: post
title: Java Console Game
description: This is where students use their knowledge of java and put it into practice.
type: plans
courses: { csa: {week: 0} }
categories: [C4.1]
---


```python
import copy
bo = 0
#defining the puzzles
comp_sudoku = [[['3', '9', '1', '2', '8', '6', '5', '7', '4'], ['4', '8', '7', '3', '5', '9', '1', '2', '6'], ['6', '5', '2', '7', '1', '4', '8', '3', '9'], ['8', '7', '5', '4', '3', '1', '6', '9', '2'], ['2', '1', '3', '9', '6', '7', '4', '8', '5'], ['9', '6', '4', '5', '2', '8', '7', '1', '3'], ['1', '4', '9', '6', '7', '3', '2', '5', '8'], ['5', '3', '8', '1', '4', '2', '9', '6', '7'], ['7', '2', '6', '8', '9', '5', '3', '4', '1']], [['8', '3', '5', '4', '1', '6', '9', '2', '7'], ['2', '9', '6', '8', '5', '7', '4', '3', '1'], ['4', '1', '7', '2', '9', '3', '6', '5', '8'], ['5', '6', '9', '1', '3', '4', '7', '8', '2'], ['1', '2', '3', '6', '7', '8', '5', '4', '9'], ['7', '4', '8', '5', '2', '9', '1', '6', '3'], ['6', '5', '2', '7', '8', '1', '3', '9', '4'], ['9', '8', '1', '3', '4', '5', '2', '7', '6'], ['3', '7', '4', '9', '6', '2', '8', '1', '5']], [['8', '2', '4', '9', '5', '3', '6', '7', '1'], ['6', '3', '5', '8', '1', '7', '9', '2', '4'], ['7', '1', '9', '6', '2', '4', '8', '5', '3'], ['5', '8', '7', '2', '9', '1', '3', '4', '6'], ['1', '4', '2', '7', '3', '6', '5', '8', '9'], ['3', '9', '6', '4', '8', '5', '2', '1', '7'], ['2', '6', '1', '5', '4', '9', '7', '3', '8'], ['4', '7', '8', '3', '6', '2', '1', '9', '5'], ['9', '5', '3', '1', '7', '8', '4', '6', '2']], [['4', '7', '6', '1', '8', '3', '5', '9', '2'], ['5', '1', '3', '2', '9', '7', '8', '6', '4'], ['2', '9', '8', '5', '4', '6', '1', '7', '3'], ['7', '3', '4', '9', '6', '1', '2', '8', '5'], ['6', '8', '5', '3', '7', '2', '9', '4', '1'], ['9', '2', '1', '4', '5', '8', '6', '3', '7'], ['1', '6', '9', '7', '2', '4', '3', '5', '8'], ['8', '4', '2', '6', '3', '5', '7', '1', '9'], ['3', '5', '7', '8', '1', '9', '4', '2', '6']], [['1', '5', '2', '4', '6', '9', '3', '7', '8'], ['7', '8', '9', '2', '1', '3', '4', '5', '6'], ['4', '3', '6', '5', '8', '7', '2', '9', '1'], ['6', '1', '3', '8', '7', '2', '5', '4', '9'], ['9', '7', '4', '1', '5', '6', '8', '2', '3'], ['8', '2', '5', '9', '3', '4', '1', '6', '7'], ['5', '6', '7', '3', '4', '8', '9', '1', '2'], ['2', '4', '8', '6', '9', '1', '7', '3', '5'], ['3', '9', '1', '7', '2', '5', '6', '8', '4']]]

difficult = ['Easy', 'Medium', 'Hard']
while True:
    dif = input("How difficult do you want your game to be(Easy, Medium, Hard): ")
    if dif not in difficult:
        print("Type your response exactly as written in the question!")
        continue
    break
if dif == "Easy":
    num = 10
if dif == "Medium":
    num = 4
if dif == "Hard":
    num = 3
puzzle = comp_sudoku[random.randint(0, 4)]
C_puzzle = copy.deepcopy(puzzle)
for y in range(0, len(puzzle)):
    for i in range(0, len(puzzle[y])):
        if random.randint(1,num) == 1:
            puzzle[y][i] = '-'

guesses_left = 10

def guess_check(guesses_left):
    guesses_left = guesses_left - 1
    if guesses_left > 1:
        print("Incorrect guess, now you only have", guesses_left,"guesses left!")
        return guesses_left + 1
    if guesses_left == 1:
        print("Incorrect guess, now you only have", guesses_left,"guess left!")
        return guesses_left + 1
    if guesses_left == 0:
        print("Sorry you lose, better luck next time!")
        while True:
            agian = input("Play Agian(True or False): ")
            if agian == 'True' or agian == 'False':
                break

            else:
                print("Must be written as exactly True or False!")

    return agian
continueP = False
while True:
    if continueP == True:
        while True:
            dif = input("How difficult do you want your game to be(Easy, Medium, Hard): ")
            if dif not in difficult:
                print("Type your response exactly as written in the question!")
                continue
            break
        if dif == "Easy":
            num = 10
        if dif == "Medium":
            num = 4
        if dif == "Hard":
            num = 3
        puzzle = comp_sudoku[random.randint(0, 4)]
        C_puzzle = copy.deepcopy(puzzle)
        for y in range(0, len(puzzle)):
            for i in range(0, len(puzzle[y])):
                if random.randint(1, num) == 1:
                    puzzle[y][i] = '-'

        guesses_left = 10

        agian = 0
        bo = 0
        continueP = False

    print("    C- 1 2 3 4 5 6 7 8 9")
    print("      ------------------")
    for y in range(0, len(puzzle)):
        print('R-',y+1,'|',' '.join(puzzle[y]))
    while True:
        col = int(input("What Column would you like to choose from(listed at the top): "))
        row = int(input("What Row would you like to choose from(listed along the side): "))
        col = col - 1
        row = row - 1
        if col <= 8 and col >= 0 and row <= 8 and row >= 0:
            if puzzle[row][col] == '-':
                break
            else:
                print("Must be a position that has a dash in it!")
        else:
            print("The rows and columns must only be 1-9")
            bo = guess_check(guesses_left)
            if bo == 'False':
                quit()

            if bo == 'True':
                break

            if bo != 'True' or bo != 'False':
                guesses_left = bo - 1
    if bo == 'True':
        continueP = True
        print("TESTING")
        continue

    while True:
        guess = input("What number would you like to guess(Must be between 1-9): ")

        if guess == '1' or guess == '2' or guess == '3' or guess == '4' or guess == '5' or guess == '6' or guess == '7' or guess == '8' or guess == '9':
            break

        else:
            print("Your Guess must be a number in between 1-9")
            bo = guess_check(guesses_left)
            if bo == 'False':
                quit()

            if bo == 'True':
                break

            if bo != 'True' or bo != 'False':
                guesses_left = bo - 1

    if bo == 'True':
        continueP = True
        continue
    if C_puzzle[row][col] == guess:
        puzzle[row][col] = guess
        print("Great Job Thats Correct")

        if puzzle == C_puzzle:
            print("CONGRATULATIONS!!! You've managed to complete the Sudoku puzzle!")
            quit()

    else:
        bo = guess_check(guesses_left)
        if bo == 'False':
            quit()

        if bo == 'True':
            continueP = True
            continue

        if bo != 'True' or bo != 'False':
            guesses_left = bo - 1
```


    ---------------------------------------------------------------------------

    NameError                                 Traceback (most recent call last)

    Cell In[1], line 19
         17 if dif == "Hard":
         18     num = 3
    ---> 19 puzzle = comp_sudoku[random.randint(0, 4)]
         20 C_puzzle = copy.deepcopy(puzzle)
         21 for y in range(0, len(puzzle)):


    NameError: name 'random' is not defined



```python
import java.util.Scanner;
import java.util.Random;
import java.util.Arrays;

public class SudokuGame {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();
        int bo = 0;
        
        String[][][] compSudoku = {
            {{"3", "9", "1", "2", "8", "6", "5", "7", "4"}, {"4", "8", "7", "3", "5", "9", "1", "2", "6"}, {"6", "5", "2", "7", "1", "4", "8", "3", "9"}, {"8", "7", "5", "4", "3", "1", "6", "9", "2"}, {"2", "1", "3", "9", "6", "7", "4", "8", "5"}, {"9", "6", "4", "5", "2", "8", "7", "1", "3"}, {"1", "4", "9", "6", "7", "3", "2", "5", "8"}, {"5", "3", "8", "1", "4", "2", "9", "6", "7"}, {"7", "2", "6", "8", "9", "5", "3", "4", "1"}},
            // Add other comp_sudoku arrays here...
        };

        String[] difficulties = {"Easy", "Medium", "Hard"};
        
        while (true) {
            System.out.print("How difficult do you want your game to be (Easy, Medium, Hard): ");
            String difficulty = scanner.nextLine();
            if (!Arrays.asList(difficulties).contains(difficulty)) {
                System.out.println("Type your response exactly as written in the question!");
                continue;
            }
            break;
        }

        int num = 0;
        if (difficulty.equals("Easy")) {
            num = 10;
        } else if (difficulty.equals("Medium")) {
            num = 4;
        } else if (difficulty.equals("Hard")) {
            num = 3;
        }

        String[][] puzzle = compSudoku[random.nextInt(5)];
        String[][] cPuzzle = new String[puzzle.length][puzzle[0].length];
        for (int i = 0; i < puzzle.length; i++) {
            cPuzzle[i] = Arrays.copyOf(puzzle[i], puzzle[i].length);
        }

        for (int y = 0; y < puzzle.length; y++) {
            for (int i = 0; i < puzzle[y].length; i++) {
                if (random.nextInt(num) + 1 == 1) {
                    puzzle[y][i] = "-";
                }
            }
        }

        int guessesLeft = 10;

        while (true) {
            // Rest of the code...
        }
    }
}
```


    Failed to start the Kernel. 


    View Jupyter <a href='command:jupyter.viewOutput'>log</a> for further details.



