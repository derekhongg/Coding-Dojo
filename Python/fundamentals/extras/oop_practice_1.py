class User:
    #Constructor
    def __init__(self, first_name, last_name, age):
        self.first_name = first_name
        self.last_name = last_name
        self.age = age
        self.amount = 0

    def make_deposit(self, amount):
        self.amount += amount
    
    def make_withdrawal(self, amount):
        self.amount-= amount
    
    def display_user_balance(self):
        print(f"User: {self.first_name} {self.last_name}, Balance: {self.amount}")

    def greeting(self):
        print(f"Hello my name is {self.first_name} and I am {self.age} years old! I have {self.amount} in my bank account loool")
    
    def transfer_money(self, amount, user):
        self.amount -= amount
        user.amount += amount
        self.display_user_balance()
        user.display_user_balance()

    

derek = User("Derek", "Hong", 24)
peter = User("Peter", "Mach", 24)
james = User("James", "Lee", 25)
andre = User("Andre", "Huang", 26)

derek.make_deposit(20000)
derek.make_deposit(2350)
derek.make_deposit(6270)
derek.make_withdrawal(6000)
peter.make_deposit(12389)
peter.make_deposit(11389)
peter.make_withdrawal(6000)
peter.make_withdrawal(2000)
james.make_deposit(50000)
james.make_withdrawal(6000)
james.make_withdrawal(5000)
james.make_withdrawal(13847)
andre.make_deposit(11345)


derek.display_user_balance()
peter.display_user_balance()
james.display_user_balance()
andre.display_user_balance()

derek.transfer_money(1000, andre)