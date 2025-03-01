#PIG GAME
import random
def roll():
    min_val=1
    max_val=6
    roll=random.randint(min_val,max_val)
    return roll
print("GAME RULES/n")
print("THIS GAME INVOLVES ROLLING DICE AND FOR EACH VALUE THE COORESPONDING POINTS WILL GET AWARDED/n ")
print("THE PLAYER CAN WIN THE GAME IF THEY GET A TOTAL OF 50 POINTS /n")
print("IT DEPENDS ON THEIR LUCK/n")
print("UNLIMITED CHANCES ARE AWARDED /n IF A PLAYER GET A NUMBER OF 1 THEN THERE CHANCE GET TERMINATE AND THE NEXT PLAYER WILL START TO ROLL/n")
while True:
    no_player=input("Enter no. of participants(2-4): ")
    if no_player.isdigit():
        no_player=int(no_player)
        if no_player>=2 and no_player<=4:
            break
        else:
            print(" atleast 2 participants are required")
    else:
        print("Invalid!,Enter Again")
points=[0 for _ in range(no_player)]
max_point=50
while max(points)<max_point:
    for ind in range(len(points)):
        print("Player no",ind+1,"is currently playind")
        current_score=0
        while True:
            choice=input("Do you want to roll(y/n) :")
            if choice!="y":
                break
            score=roll()
            if score==1:
                print("THER YOU GOT ONE IT'S TIME FOR THE NEXT PLAYER TO START")
                print("AHHH! YOUR ARE DONE :-( ")
                break
            else:
                current_score+=score
                print("you rolled a score of ",score)
            print("your current score is",current_score)
        points[ind]+=current_score

        print("Your Total Score is",points[ind])
max_score=max(points)
max_ind=points.index(max_score)
print("Congratulation player ",max_ind+1," is the Winner with ",max_score," point")

            



