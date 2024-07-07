from django.core.management.base import BaseCommand
from core.models import Quests

class Command(BaseCommand):
    help = 'Inserts quests into the database'

    def handle(self, *args, **kwargs):
        quests_data = [
            {'name': 'Bodyweight Squats', 'target_area': 'lower', 'description': 'Insert description here', 'available': True, 'password': '1', 'quest_points': '100'},
            {'name': 'Lunges', 'target_area': 'lower', 'description': 'Insert description here', 'available': False, 'password': '1', 'quest_points': '100'},
            {'name': 'Goblet Squats', 'target_area': 'lower', 'description': 'Insert description here', 'available': True, 'password': '1', 'quest_points': '100'},
            {'name': 'Glute Bridges', 'target_area': 'lower', 'description': 'Insert description here', 'available': False, 'password': '1', 'quest_points': '100'},
            {'name': 'Hamstring Curls', 'target_area': 'lower', 'description': 'Insert description here', 'available': True, 'password': '1', 'quest_points': '100'},
            {'name': 'Quad Extensions', 'target_area': 'lower', 'description': 'Insert description here', 'available': False, 'password': '1', 'quest_points': '100'},
            {'name': 'Romanian Deadlift', 'target_area': 'lower', 'description': 'Insert description here', 'available': True, 'password': '1', 'quest_points': '200'},
            {'name': 'Leg Press', 'target_area': 'lower', 'description': 'Insert description here', 'available': True, 'password': '1', 'quest_points': '200'},
            {'name': 'Hip Thrusts', 'target_area': 'lower', 'description': 'Insert description here', 'available': True, 'password': '1', 'quest_points': '200'},
            {'name': 'Front Squats', 'target_area': 'lower', 'description': 'Insert description here', 'available': False, 'password': '1', 'quest_points': '300'},
            {'name': 'Deadlifts', 'target_area': 'lower', 'description': 'Insert description here', 'available': True, 'password': '1', 'quest_points': '300'},
            {'name': 'Bulgarian Split Squats', 'target_area': 'lower', 'description': 'Insert description here', 'available': True, 'password': '1', 'quest_points': '300'},
            {'name': 'Nordic Curls', 'target_area': 'lower', 'description': 'Insert description here', 'available': True, 'password': '1', 'quest_points': '300'},
            {'name': 'Pause Squats', 'target_area': 'lower', 'description': 'Insert description here', 'available': True, 'password': '1', 'quest_points': '300'},
            {'name': 'Barbell Back Sqauts', 'target_area': 'lower', 'description': 'Insert description here', 'available': False, 'password': '1', 'quest_points': '200'},
            {'name': 'Pushups', 'target_area': 'chest', 'description': 'Insert description here', 'available': True, 'password': '1', 'quest_points': '100'},
            {'name': 'Chest Press Machine', 'target_area': 'chest', 'description': 'Insert description here', 'available': True, 'password': '1', 'quest_points': '100'},
            {'name': 'Weighted Dips', 'target_area': 'chest', 'description': 'Insert description here', 'available': True, 'password': '1', 'quest_points': '300'},
            {'name': 'Close-grip Bench', 'target_area': 'chest', 'description': 'Insert description here', 'available': True, 'password': '1', 'quest_points': '300'},
            {'name': 'Dumbbell Flys', 'target_area': 'chest', 'description': 'Insert description here', 'available': True, 'password': '1', 'quest_points': '100'},
            {'name': 'Decline Pushups', 'target_area': 'chest', 'description': 'Insert description here', 'available': False, 'password': '1', 'quest_points': '200'},
            {'name': 'Barbell Bench Press', 'target_area': 'chest', 'description': 'Insert description here', 'available': False, 'password': '1', 'quest_points': '200'},
            {'name': 'Incline Dumbbell Press', 'target_area': 'chest', 'description': 'Insert description here', 'available': True, 'password': '1', 'quest_points': '200'},
            {'name': 'Cable Cross Overs', 'target_area': 'chest', 'description': 'Insert description here', 'available': True, 'password': '1', 'quest_points': '200'},
            {'name': 'Dips', 'target_area': 'chest', 'description': 'Insert description here', 'available': True, 'password': '1', 'quest_points': '200'},
            {'name': 'Pause Bench Press', 'target_area': 'chest', 'description': 'Insert description here', 'available': False, 'password': '1', 'quest_points': '300'},
            {'name': 'One Arm Pushups', 'target_area': 'chest', 'description': 'Insert description here', 'available': True, 'password': '1', 'quest_points': '300'},
            {'name': 'Lateral Pulldowns', 'target_area': 'pull', 'description': 'Insert description here', 'available': False, 'password': '1', 'quest_points': '100'},
            {'name': 'Face Pulls', 'target_area': 'pull', 'description': 'Insert description here', 'available': False, 'password': '1', 'quest_points': '100'},
            {'name': 'Australian Pullups', 'target_area': 'pull', 'description': 'Insert description here', 'available': True, 'password': '1', 'quest_points': '100'},
            {'name': 'Cable Rows', 'target_area': 'pull', 'description': 'Insert description here', 'available': True, 'password': '1', 'quest_points': '100'},
            {'name': 'Barbell Rows ', 'target_area': 'pull', 'description': 'Insert description here', 'available': False, 'password': '1', 'quest_points': '200'},
            {'name': 'Pullups', 'target_area': 'pull', 'description': 'Insert description here', 'available': True, 'password': '1', 'quest_points': '200'},
            {'name': 'T-bar Rows', 'target_area': 'pull', 'description': 'Insert description here', 'available': True, 'password': '1', 'quest_points': '200'},
            {'name': 'Upright Rows', 'target_area': 'pull', 'description': 'Insert description here', 'available': True, 'password': '1', 'quest_points': '200'},
            {'name': 'Ring Pullups', 'target_area': 'pull', 'description': 'Insert description here', 'available': False, 'password': '1', 'quest_points': '300'},
            {'name': 'Muscle-ups', 'target_area': 'pull', 'description': 'Insert description here', 'available': False, 'password': '1', 'quest_points': '300'},
            {'name': 'Weighted Pullups', 'target_area': 'pull', 'description': 'Insert description here', 'available': True, 'password': '1', 'quest_points': '300'},
            {'name': 'Pendlay Rows', 'target_area': 'pull', 'description': 'Insert description here', 'available': True, 'password': '1', 'quest_points': '300'},
            {'name': 'Dumbbell Rows', 'target_area': 'pull', 'description': 'Insert description here', 'available': True, 'password': '1', 'quest_points': '100'},
            {'name': 'Bicep Curls', 'target_area': 'arms', 'description': 'Insert description here', 'available': True, 'password': '1', 'quest_points': '100'},
            {'name': 'Tricep Kickbacks', 'target_area': 'arms', 'description': 'Insert description here', 'available': True, 'password': '1', 'quest_points': '100'},
            {'name': 'Hammer Curls', 'target_area': 'arms', 'description': 'Insert description here', 'available': False, 'password': '1', 'quest_points': '100'},
            {'name': 'Cable Pushdowns', 'target_area': 'arms', 'description': 'Insert description here', 'available': False, 'password': '1', 'quest_points': '100'},
            {'name': 'Cable Skullcrushers', 'target_area': 'arms', 'description': 'Insert description here', 'available': True, 'password': '1', 'quest_points': '100'},
            {'name': 'Dumbbell Skullcrushers', 'target_area': 'arms', 'description': 'Insert description here', 'available': False, 'password': '1', 'quest_points': '200'},
            {'name': 'Overhead Dumbell Tricep Extensions', 'target_area': 'arms', 'description': 'Insert description here', 'available': False, 'password': '1', 'quest_points': '200'},
            {'name': 'Lateral Raises ', 'target_area': 'arms', 'description': 'Insert description here', 'available': True, 'password': '1', 'quest_points': '200'},
            {'name': 'LU Raises ', 'target_area': 'arms', 'description': 'Insert description here', 'available': True, 'password': '1', 'quest_points': '200'},
            {'name': 'Incline Bicep Curls', 'target_area': 'arms', 'description': 'Insert description here', 'available': True, 'password': '1', 'quest_points': '200'},
            {'name': 'Barbell Curls', 'target_area': 'arms', 'description': 'Insert description here', 'available': False, 'password': '1', 'quest_points': '300'},
            {'name': 'Preacher Curls', 'target_area': 'arms', 'description': 'Insert description here', 'available': False, 'password': '1', 'quest_points': '300'},
            {'name': 'Weighted Tricep Dips', 'target_area': 'arms', 'description': 'Insert description here', 'available': True, 'password': '1', 'quest_points': '300'},
            {'name': 'Bicep Pull Ups', 'target_area': 'arms', 'description': 'Insert description here', 'available': True, 'password': '1', 'quest_points': '300'},
            {'name': 'Wide Over Head Press', 'target_area': 'arms', 'description': 'Insert description here', 'available': True, 'password': '1', 'quest_points': '300'},
        ]

        for quest_data in quests_data:
            quest, created = Quests.objects.get_or_create(**quest_data)
            if created:
                self.stdout.write(self.style.SUCCESS(f'Successfully created quest: {quest.name}'))
            else:
                self.stdout.write(self.style.WARNING(f'Quest already exists: {quest.name}'))