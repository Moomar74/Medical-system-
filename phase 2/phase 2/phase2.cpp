#include <iostream>
#include <conio.h>

using namespace std;
void Ersem(char X[][203], int cladder)
{
	for (int r = 0; r < 51; r++)
	{
		for (int c = 0; c < 203; c++)
		{
			X[r][c] = ' ';
		}
	}

	for (int c = 0; c < 203; c++)
	{
		X[0][c] = '*';
		X[50][c] = '*';
		X[25][c] = '*';
		//X[16][c] = '*';
	}
	for (int r = 0; r < 51; r++)
	{
		X[r][0] = '*';
		X[r][100] = '*';
		X[r][202] = '*';
	}
	for (int i = 0;i < 7;i++)
	{
		X[32][cladder - 1] = ' ';
		cladder++;

	}
}
void Disp(char X[][203], int rHero, int cHero)
{
	system("cls");
	for (int r = 0; r < 51; r++)
	{
		for (int c = 0; c < 203; c++)
		{
			cout << X[r][c];
		}
	}
}
void Dispshero(char X[][203], int rHero, int cHero)//mnew
{
	if (rHero < 50)
	{

		if (cHero > 50 && cHero < 153)
		{
			system("cls");
			for (int r = rHero - 22; r < rHero + 3; r++)
			{
				for (int c = cHero - 50; c < cHero + 50; c++)
				{

					cout << X[r][c];
					X[rHero - 21][cHero - 45] = 65;

				}
			}
		}
		if (cHero < 50)
		{
			system("cls");
			for (int r = rHero - 22; r < rHero + 3; r++)
			{
				for (int c = 0; c < 100; c++)
				{
					cout << X[r][c];
					X[rHero - 21][cHero - 45] = 65;

				}
			}
		}
		if (cHero > 153)
		{
			system("cls");
			for (int r = rHero - 22; r < rHero + 3; r++)
			{
				for (int c = 103; c < 203; c++)
				{
					cout << X[r][c];
					X[rHero - 21][cHero - 45] = 65;

				}
			}
		}

	}

}
void Dispsdragon(char X[][203], int rdragon, int cdragon)
{
	if (rdragon < 50)
	{
		if (cdragon > 50 && cdragon < 153)
		{
			system("cls");
			for (int r = rdragon - 5; r < rdragon + 15; r++)
			{
				for (int c = cdragon - 50; c < cdragon + 50; c++)
				{
					cout << X[r][c];
				}
			}
		}
		if (cdragon < 50)
		{
			system("cls");
			for (int r = rdragon - 5; r < rdragon + 15; r++)
			{
				for (int c = 0; c < 100; c++)
				{
					cout << X[r][c];
				}
			}
		}
		if (cdragon > 153)
		{
			system("cls");
			for (int r = rdragon - 5; r < rdragon + 15; r++)
			{
				for (int c = 103; c < 203; c++)
				{
					cout << X[r][c];
				}
			}
		}

	}
}
void enemyg(char X[][203], int rEnmyg, int cEnmyg)
{
	X[rEnmyg + 2][cEnmyg] = 'm';
	X[rEnmyg + 2][cEnmyg - 1] = 'm';
	X[rEnmyg + 2][cEnmyg + 1] = 'm';
	X[rEnmyg + 2][cEnmyg + 2] = 'm';
	X[rEnmyg + 2][cEnmyg + 3] = '_';
	X[rEnmyg + 2][cEnmyg + 4] = '\\';
	X[rEnmyg + 2][cEnmyg + 5] = '/';
	X[rEnmyg + 2][cEnmyg - 2] = '_';
	X[rEnmyg + 2][cEnmyg - 3] = '/';
	X[rEnmyg + 2][cEnmyg - 4] = '\\';
	X[rEnmyg + 3][cEnmyg] = 'm';

	X[rEnmyg + 3][cEnmyg - 1] = 'm';
	X[rEnmyg + 3][cEnmyg + 1] = 'm';
	X[rEnmyg + 3][cEnmyg + 2] = 'm';
	X[rEnmyg + 3][cEnmyg + 3] = '_';
	X[rEnmyg + 3][cEnmyg + 4] = '\\';
	X[rEnmyg + 3][cEnmyg + 5] = '/';
	X[rEnmyg + 3][cEnmyg - 2] = '_';
	X[rEnmyg + 3][cEnmyg - 3] = '/';
	X[rEnmyg + 3][cEnmyg - 4] = '\\';

	X[rEnmyg + 3][cEnmyg + 5] = '/';
	X[rEnmyg + 3][cEnmyg - 2] = '_';
	X[rEnmyg + 3][cEnmyg - 3] = '/';
	X[rEnmyg + 3][cEnmyg - 4] = '\\';

	X[rEnmyg + 4][cEnmyg + 1] = 'n';
	X[rEnmyg + 4][cEnmyg + 2] = 'n';

	X[rEnmyg + 5][cEnmyg + 2] = '(';
	X[rEnmyg + 5][cEnmyg + 3] = ')';

	X[rEnmyg + 5][cEnmyg + 4] = '_';
	X[rEnmyg + 5][cEnmyg + 5] = '_';
	X[rEnmyg + 5][cEnmyg + 6] = '_';
	X[rEnmyg + 5][cEnmyg + 7] = '(';
	X[rEnmyg + 5][cEnmyg + 8] = ')';
	X[rEnmyg + 4][cEnmyg + 8] = '/';


	X[rEnmyg + 1][cEnmyg] = 'n';
	X[rEnmyg + 1][cEnmyg + 1] = 'n';
	X[rEnmyg + 1][cEnmyg + 2] = '.';
	X[rEnmyg + 1][cEnmyg + 3] = 'o';
	X[rEnmyg + 1][cEnmyg + 4] = '0';
	X[rEnmyg + 1][cEnmyg - 1] = '.';
	X[rEnmyg + 1][cEnmyg - 2] = 'o';
	X[rEnmyg + 1][cEnmyg - 3] = '0';


	X[rEnmyg][cEnmyg - 3] = ')';
	X[rEnmyg][cEnmyg - 4] = '(';
	X[rEnmyg - 1][cEnmyg - 4] = '0';
	X[rEnmyg - 2][cEnmyg - 3] = '(';

	X[rEnmyg][cEnmyg + 4] = '(';
	X[rEnmyg][cEnmyg + 5] = ')';
	X[rEnmyg - 1][cEnmyg + 5] = '0';
	X[rEnmyg - 2][cEnmyg + 4] = ')';
}
/*void ersemenmydie(char X[][203], int rEnmyg, int cEnmyg)
{
	X[rEnmyg - 4][cEnmyg - 3] = '/';
	X[rEnmyg - 4][cEnmyg - 2] = '/';
	X[rEnmyg - 4][cEnmyg] = '^';
	X[rEnmyg - 4][cEnmyg] = '0';

	X[rEnmyg - 3][cEnmyg-3] ='\\';
	X[rEnmyg - 3][cEnmyg - 2] = '\\';
	X[rEnmyg - 3][cEnmyg - 1] = '0';
	X[rEnmyg - 3][cEnmyg ] = 'v';
	X[rEnmyg - 3][cEnmyg +2] = '^';

	X[rEnmyg - 2][cEnmyg - 3] = '|';
	X[rEnmyg - 2][cEnmyg - 2] = '|';
	X[rEnmyg - 2][cEnmyg - 1] = 'o';

	X[rEnmyg - 1][cEnmyg - 3] = 'ɯ';
	X[rEnmyg - 1][cEnmyg - 2] = 'ɯ';
	X[rEnmyg - 1][cEnmyg - 1] = '.';

	X[rEnmyg ][cEnmyg - 3] = 'ɯ';
	X[rEnmyg ][cEnmyg - 2] = 'ɯ';
	X[rEnmyg ][cEnmyg - 1] = '>';

	X[rEnmyg + 1][cEnmyg - 4] = '>';
	X[rEnmyg+1][cEnmyg - 3] = 'ɯ';
	X[rEnmyg+1][cEnmyg - 2] = 'ɯ';
	X[rEnmyg+1][cEnmyg - 1] = '>';

	X[rEnmyg + 2][cEnmyg - 5] = '^';
	X[rEnmyg + 2][cEnmyg - 4] = '>';
	X[rEnmyg + 2][cEnmyg - 3] = 'ɯ';
	X[rEnmyg + 2][cEnmyg - 2] = 'ɯ';
	X[rEnmyg + 2][cEnmyg - 1] = '.';

	X[rEnmyg +3][cEnmyg - 3] = '|';
	X[rEnmyg +3][cEnmyg - 2] = '|';
	X[rEnmyg +3][cEnmyg - 1] = 'o';
	X[rEnmyg + 3][cEnmyg - 5] = 'v';

	X[rEnmyg + 4][cEnmyg - 5] = '|';
	X[rEnmyg + 4][cEnmyg - 3] = '/';
	X[rEnmyg + 4][cEnmyg-2] = '/';
	X[rEnmyg + 4][cEnmyg - 1] = '0';
	X[rEnmyg + 4][cEnmyg] = '^';
	X[rEnmyg + 4][cEnmyg + 2] = 'v';

	X[rEnmyg + 5][cEnmyg] = 'v';
	X[rEnmyg + 5][cEnmyg - 5] = '|';
	X[rEnmyg + 5][cEnmyg - 3] = '\\';
	X[rEnmyg + 5][cEnmyg - 2] = '\\';
	X[rEnmyg + 5][cEnmyg + 1] = '0';

	X[rEnmyg + 6][cEnmyg -5] = '^';

	X[rEnmyg + 7][cEnmyg - 5] = 'v';
	X[rEnmyg + 7][cEnmyg - 4] = '\\';





















	cEnmyg -= 2;
}
*/
void henmyg(char x[][203], int& rEenmyg, int& cEnmyg, int& gs, int& cgs, int& cHero, int& cthh) // shahd now
{

	if (gs == 1) {
		cgs++;
		cEnmyg -= 2;
	}
	if (cgs == 19) {
		gs = 2;
	}
	if (cgs == 0) {
		gs = 1;
	}
	if (gs == 2) {
		cEnmyg += 2;
		cgs--;
	}
	if (cHero == cEnmyg + 4) {
		cthh--;

	}



}
void ersmdragon(char X[][203], int rdragon, int cdragon) {
	X[rdragon][cdragon - 1] = '_';
	X[rdragon][cdragon] = '_';
	X[rdragon][cdragon + 1] = '.';
	X[rdragon + 1][cdragon + 1] = '/';
	X[rdragon + 1][cdragon + 2] = '\\';
	X[rdragon + 1][cdragon + 3] = '\\';
	X[rdragon + 2][cdragon + 3] = '"';
	X[rdragon + 2][cdragon + 2] = '`';
	X[rdragon + 1][cdragon] = '_';
	X[rdragon + 1][cdragon - 1] = '_';
	X[rdragon + 1][cdragon - 3] = '\\';
	X[rdragon + 1][cdragon - 2] = ')';  //exact middle        )
	X[rdragon + 1][cdragon - 1] = '_';
	X[rdragon + 1][cdragon - 4] = '=';
	X[rdragon + 1][cdragon - 5] = '=';
	X[rdragon + 1][cdragon - 6] = '=';
	X[rdragon + 1][cdragon - 7] = '=';
	X[rdragon + 1][cdragon - 8] = '`';
	X[rdragon][cdragon - 9] = '\\';
	X[rdragon][cdragon - 8] = '\\';
	X[rdragon][cdragon - 7] = '_';
	X[rdragon][cdragon - 6] = '_';
	X[rdragon][cdragon - 5] = '_';
	X[rdragon][cdragon - 4] = '/';
	X[rdragon - 1][cdragon - 10] = '_';
	X[rdragon - 1][cdragon - 11] = '_';
	X[rdragon][cdragon - 12] = '<';
	X[rdragon + 2][cdragon - 2] = '/';
	X[rdragon + 2][cdragon - 3] = '/';
	X[rdragon + 3][cdragon - 2] = '\\';
	X[rdragon + 3][cdragon - 3] = '\\';
	X[rdragon + 4][cdragon - 2] = '"';
	X[rdragon + 4][cdragon - 3] = '`';

	X[rdragon - 1][cdragon - 2] = '-';
	X[rdragon - 1][cdragon - 1] = '\\';
	X[rdragon - 1][cdragon] = '\\';
	X[rdragon - 1][cdragon + 1] = '\\';
	X[rdragon - 1][cdragon + 2] = '-';
	X[rdragon - 1][cdragon + 3] = '-';
	X[rdragon - 1][cdragon + 4] = '/';
	X[rdragon - 1][cdragon + 6] = '/';
	X[rdragon][cdragon + 6] = '`';
	X[rdragon][cdragon + 4] = ')';
	X[rdragon - 2][cdragon + 7] = '/';
	X[rdragon - 2][cdragon + 5] = '/';
	X[rdragon - 2][cdragon + 3] = '|';
	X[rdragon - 2][cdragon + 2] = '|';
	X[rdragon - 2][cdragon] = '|';
	X[rdragon - 2][cdragon - 1] = '|';
	X[rdragon - 2][cdragon - 2] = '_';
	X[rdragon - 2][cdragon - 3] = '\\';
	X[rdragon - 3][cdragon - 4] = ')';
	X[rdragon - 3][cdragon - 2] = '\\';
	X[rdragon - 3][cdragon - 1] = '\\';
	X[rdragon - 3][cdragon + 1] = '\\';
	X[rdragon - 3][cdragon + 2] = '\\';
	X[rdragon - 3][cdragon + 2] = '\\';
	X[rdragon - 3][cdragon + 6] = '/';
	X[rdragon - 2][cdragon + 8] = '^';
	X[rdragon - 2][cdragon + 9] = '`';
	X[rdragon - 2][cdragon + 10] = '-';
	X[rdragon - 2][cdragon + 11] = '`';
	X[rdragon - 3][cdragon + 11] = '\\';
	X[rdragon - 3][cdragon + 10] = '*';
	X[rdragon - 4][cdragon + 7] = '_';
	X[rdragon - 4][cdragon + 8] = '_';
	X[rdragon - 4][cdragon + 9] = '_';
	X[rdragon - 4][cdragon + 10] = '_';
	X[rdragon - 4][cdragon - 2] = '\\';
	X[rdragon - 4][cdragon - 3] = '\\';
	X[rdragon - 4][cdragon] = '\\';
	X[rdragon - 4][cdragon + 1] = '\\';
	X[rdragon - 5][cdragon] = ',';
	X[rdragon - 5][cdragon - 3] = ',';
}
void ersmbutton(char X[][203], int rbutton, int cbutton)
{
	X[rbutton][cbutton] = 220;

}
void ersmobstacle2(char X[][203], int robstacle2, int cobstacle2, int ob2f)//mnew
{
	if (ob2f < 22)
	{
		X[robstacle2][cobstacle2] = 178;
		X[robstacle2][cobstacle2 + 1] = 178;
		X[robstacle2][cobstacle2 + 2] = 178;
		X[robstacle2][cobstacle2 + 3] = 178;
		X[robstacle2][cobstacle2 + 5] = 178;
		X[robstacle2][cobstacle2 + 4] = 178;
	}
	if (ob2f < 21)
	{
		X[robstacle2 + 1][cobstacle2 + 2] = 178;
		X[robstacle2 + 1][cobstacle2 + 3] = 178;
		X[robstacle2 + 1][cobstacle2 + 4] = 178;
		X[robstacle2 + 1][cobstacle2 + 5] = 178;
		X[robstacle2 + 1][cobstacle2 + 1] = 178;
		X[robstacle2 + 1][cobstacle2] = 178;
	}
	if (ob2f < 20)
	{
		X[robstacle2 + 2][cobstacle2 + 1] = 178;
		X[robstacle2 + 2][cobstacle2] = 178;
		X[robstacle2 + 2][cobstacle2 + 2] = 178;
		X[robstacle2 + 2][cobstacle2 + 3] = 178;
		X[robstacle2 + 2][cobstacle2 + 4] = 178;
		X[robstacle2 + 2][cobstacle2 + 5] = 178;
	}
	if (ob2f < 19)
	{
		X[robstacle2 + 3][cobstacle2 + 1] = 178;
		X[robstacle2 + 3][cobstacle2] = 178;
		X[robstacle2 + 3][cobstacle2 + 2] = 178;
		X[robstacle2 + 3][cobstacle2 + 3] = 178;
		X[robstacle2 + 3][cobstacle2 + 4] = 178;
		X[robstacle2 + 3][cobstacle2 + 5] = 178;
	}

	if (ob2f < 18)
	{
		X[robstacle2 + 4][cobstacle2 + 1] = 178;
		X[robstacle2 + 4][cobstacle2] = 178;
		X[robstacle2 + 4][cobstacle2 + 2] = 178;
		X[robstacle2 + 4][cobstacle2 + 3] = 178;
		X[robstacle2 + 4][cobstacle2 + 4] = 178;
		X[robstacle2 + 4][cobstacle2 + 5] = 178;
	}
	if (ob2f < 17)
	{
		X[robstacle2 + 5][cobstacle2 + 1] = 178;
		X[robstacle2 + 5][cobstacle2] = 178;
		X[robstacle2 + 5][cobstacle2 + 2] = 178;
		X[robstacle2 + 5][cobstacle2 + 3] = 178;
		X[robstacle2 + 5][cobstacle2 + 4] = 178;
		X[robstacle2 + 5][cobstacle2 + 5] = 178;
	}
	if (ob2f < 16)
	{
		X[robstacle2 + 6][cobstacle2 + 1] = 178;
		X[robstacle2 + 6][cobstacle2] = 178;
		X[robstacle2 + 6][cobstacle2 + 2] = 178;
		X[robstacle2 + 6][cobstacle2 + 3] = 178;
		X[robstacle2 + 6][cobstacle2 + 4] = 178;
		X[robstacle2 + 6][cobstacle2 + 5] = 178;
	}
	if (ob2f < 15)
	{
		X[robstacle2 + 7][cobstacle2 + 1] = 178;
		X[robstacle2 + 7][cobstacle2] = 178;
		X[robstacle2 + 7][cobstacle2 + 2] = 178;
		X[robstacle2 + 7][cobstacle2 + 3] = 178;
		X[robstacle2 + 7][cobstacle2 + 4] = 178;
		X[robstacle2 + 7][cobstacle2 + 5] = 178;
	}
	if (ob2f < 14)
	{
		X[robstacle2 + 8][cobstacle2 + 1] = 178;
		X[robstacle2 + 8][cobstacle2] = 178;
		X[robstacle2 + 8][cobstacle2 + 2] = 178;
		X[robstacle2 + 8][cobstacle2 + 3] = 178;
		X[robstacle2 + 8][cobstacle2 + 4] = 178;
		X[robstacle2 + 8][cobstacle2 + 5] = 178;
	}
	if (ob2f < 13)
	{
		X[robstacle2 + 9][cobstacle2 + 1] = 178;
		X[robstacle2 + 9][cobstacle2] = 178;
		X[robstacle2 + 9][cobstacle2 + 2] = 178;
		X[robstacle2 + 9][cobstacle2 + 3] = 178;
		X[robstacle2 + 9][cobstacle2 + 4] = 178;
		X[robstacle2 + 9][cobstacle2 + 5] = 178;
	}
	if (ob2f < 12)
	{
		X[robstacle2 + 10][cobstacle2 + 1] = 178;
		X[robstacle2 + 10][cobstacle2] = 178;
		X[robstacle2 + 10][cobstacle2 + 2] = 178;
		X[robstacle2 + 10][cobstacle2 + 3] = 178;
		X[robstacle2 + 10][cobstacle2 + 4] = 178;
		X[robstacle2 + 10][cobstacle2 + 5] = 178;
	}
	if (ob2f < 11)
	{
		X[robstacle2 + 11][cobstacle2 + 1] = 178;
		X[robstacle2 + 11][cobstacle2] = 178;
		X[robstacle2 + 11][cobstacle2 + 2] = 178;
		X[robstacle2 + 11][cobstacle2 + 3] = 178;
		X[robstacle2 + 11][cobstacle2 + 4] = 178;
		X[robstacle2 + 11][cobstacle2 + 5] = 178;
	}
	if (ob2f < 10)
	{
		X[robstacle2 + 12][cobstacle2 + 1] = 178;
		X[robstacle2 + 12][cobstacle2] = 178;
		X[robstacle2 + 12][cobstacle2 + 2] = 178;
		X[robstacle2 + 12][cobstacle2 + 3] = 178;
		X[robstacle2 + 12][cobstacle2 + 4] = 178;
		X[robstacle2 + 12][cobstacle2 + 5] = 178;
	}
	if (ob2f < 9)
	{
		X[robstacle2 + 13][cobstacle2 + 1] = 178;
		X[robstacle2 + 13][cobstacle2] = 178;
		X[robstacle2 + 13][cobstacle2 + 2] = 178;
		X[robstacle2 + 13][cobstacle2 + 3] = 178;
		X[robstacle2 + 13][cobstacle2 + 4] = 178;
		X[robstacle2 + 13][cobstacle2 + 5] = 178;
	}
	if (ob2f < 8)
	{
		X[robstacle2 + 14][cobstacle2 + 1] = 178;
		X[robstacle2 + 14][cobstacle2] = 178;
		X[robstacle2 + 14][cobstacle2 + 2] = 178;
		X[robstacle2 + 14][cobstacle2 + 3] = 178;
		X[robstacle2 + 14][cobstacle2 + 4] = 178;
		X[robstacle2 + 14][cobstacle2 + 5] = 178;
	}
	if (ob2f < 7)
	{
		X[robstacle2 + 15][cobstacle2 + 1] = 178;
		X[robstacle2 + 15][cobstacle2] = 178;
		X[robstacle2 + 15][cobstacle2 + 2] = 178;
		X[robstacle2 + 15][cobstacle2 + 3] = 178;
		X[robstacle2 + 15][cobstacle2 + 4] = 178;
		X[robstacle2 + 15][cobstacle2 + 5] = 178;
	}
	if (ob2f < 6)
	{
		X[robstacle2 + 16][cobstacle2 + 1] = 178;
		X[robstacle2 + 16][cobstacle2] = 178;
		X[robstacle2 + 16][cobstacle2 + 2] = 178;
		X[robstacle2 + 16][cobstacle2 + 3] = 178;
		X[robstacle2 + 16][cobstacle2 + 4] = 178;
		X[robstacle2 + 16][cobstacle2 + 5] = 178;
	}
	if (ob2f < 5)
	{
		X[robstacle2 + 17][cobstacle2 + 1] = 178;
		X[robstacle2 + 17][cobstacle2] = 178;
		X[robstacle2 + 17][cobstacle2 + 2] = 178;
		X[robstacle2 + 17][cobstacle2 + 3] = 178;
		X[robstacle2 + 17][cobstacle2 + 4] = 178;
		X[robstacle2 + 17][cobstacle2 + 5] = 178;
	}
	if (ob2f < 4)
	{
		X[robstacle2 + 18][cobstacle2 + 1] = 178;
		X[robstacle2 + 18][cobstacle2] = 178;
		X[robstacle2 + 18][cobstacle2 + 2] = 178;
		X[robstacle2 + 18][cobstacle2 + 3] = 178;
		X[robstacle2 + 18][cobstacle2 + 4] = 178;
		X[robstacle2 + 18][cobstacle2 + 5] = 178;
	}
	if (ob2f < 3)
	{
		X[robstacle2 + 19][cobstacle2 + 1] = 178;
		X[robstacle2 + 19][cobstacle2] = 178;
		X[robstacle2 + 19][cobstacle2 + 2] = 178;
		X[robstacle2 + 19][cobstacle2 + 3] = 178;
		X[robstacle2 + 19][cobstacle2 + 4] = 178;
		X[robstacle2 + 19][cobstacle2 + 5] = 178;
	}
	if (ob2f < 2)
	{
		X[robstacle2 + 20][cobstacle2 + 1] = 178;
		X[robstacle2 + 20][cobstacle2] = 178;
		X[robstacle2 + 20][cobstacle2 + 2] = 178;
		X[robstacle2 + 20][cobstacle2 + 3] = 178;
		X[robstacle2 + 20][cobstacle2 + 4] = 178;
		X[robstacle2 + 20][cobstacle2 + 5] = 178;
	}
	if (ob2f < 1)
	{
		X[robstacle2 + 21][cobstacle2 + 1] = 178;
		X[robstacle2 + 21][cobstacle2] = 178;
		X[robstacle2 + 21][cobstacle2 + 2] = 178;
		X[robstacle2 + 21][cobstacle2 + 3] = 178;
		X[robstacle2 + 21][cobstacle2 + 4] = 178;
		X[robstacle2 + 21][cobstacle2 + 5] = 178;
	}




}
void Harakobstacle2(char X[][203], int rHero, int cHero, int rbutton, int cbutton, int robstacle2, int cobstacle2, int& a, int& i, int& ob2f)
{
	if (rHero == rbutton && cHero == cbutton)
	{
		ob2f++;
	}
	else
	{
		if (ob2f > 0)
			ob2f--;
	}
}
void ersmobstacle1(char X[][203], int robstacle1, int cobstacle1)
{
	X[robstacle1][cobstacle1] = 186;
	X[robstacle1][cobstacle1 + 2] = 186;
	X[robstacle1 + 1][cobstacle1] = 186;
	X[robstacle1 + 1][cobstacle1 + 2] = 186;
	X[robstacle1 + 2][cobstacle1 - 1] = 223;
	X[robstacle1 + 2][cobstacle1] = 223;
	X[robstacle1 + 2][cobstacle1 + 1] = 223;
	X[robstacle1 + 2][cobstacle1 + 2] = 223;
	X[robstacle1 + 2][cobstacle1 + 3] = 223;


}
void ersmhero(char X[][203], int rHero, int cHero)
{

	X[rHero][cHero] = '-';
	X[rHero][cHero + 4] = '-';
	X[rHero][cHero - 1] = '/';
	X[rHero][cHero + 1] = ']';
	X[rHero][cHero + 3] = '[';
	X[rHero][cHero + 5] = '\\';
	X[rHero - 1][cHero] = '|';
	X[rHero - 1][cHero + 2] = '|';
	X[rHero - 1][cHero + 4] = '|';
	//X[rHero-2][cHero] = '[';
	//X[rHero-2][cHero+1] = ']';
	//X[rHero-2][cHero+2] = '|';
	//X[rHero - 2][cHero + 3] = '[';
	//X[rHero - 2][cHero + 4] = ']';
	//X[rHero - 3][cHero ] = '|';
	//X[rHero - 3][cHero+2] = '|';
	//X[rHero - 3][cHero+4] = '|';
	X[rHero - 2][cHero] = '|';
	X[rHero - 2][cHero + 2] = '|';
	X[rHero - 2][cHero + 4] = '|';
	X[rHero - 3][cHero] = '\\';
	X[rHero - 3][cHero + 1] = '-';
	X[rHero - 3][cHero + 2] = '-';
	X[rHero - 3][cHero + 3] = '-';
	X[rHero - 3][cHero + 4] = '/';
	//X[rHero - 4][cHero] = '|';
	//X[rHero - 4][cHero + 1] = '\\';
	//X[rHero - 4][cHero + 3] = '/';
	//X[rHero - 4][cHero + 4] = '|';
	//X[rHero - 5][cHero + 1] = '\\';
	//X[rHero - 5][cHero + 2] = '_';
	//X[rHero - 5][cHero + 3] = '/';
	//X[rHero - 5][cHero + 1] = '\\';
	//X[rHero - 5][cHero + 2] = '_';
	X[rHero - 3][cHero + 6] = '\\';
	X[rHero - 3][cHero + 7] = '/';
	X[rHero - 4][cHero] = '|';
	X[rHero - 4][cHero + 1] = '/';
	X[rHero - 4][cHero + 2] = '_';
	X[rHero - 4][cHero + 3] = '\\';
	X[rHero - 4][cHero + 4] = '|';
	X[rHero - 4][cHero + 5] = '\\';
	X[rHero - 4][cHero + 6] = '\\';
	X[rHero - 4][cHero + 7] = '/';
	X[rHero - 4][cHero + 8] = '/';
	X[rHero - 5][cHero + 2] = '_';
	X[rHero - 5][cHero + 5] = '\\';
	X[rHero - 6][cHero] = '_';
	X[rHero - 6][cHero + 1] = '\\';
	X[rHero - 6][cHero + 2] = '=';
	X[rHero - 6][cHero + 3] = '/';
	X[rHero - 6][cHero + 4] = '_';
	X[rHero - 7][cHero] = '[';
	X[rHero - 7][cHero + 2] = '0';
	X[rHero - 7][cHero + 3] = '0';
	X[rHero - 7][cHero + 4] = '|';
	X[rHero - 8][cHero + 1] = '/';
	X[rHero - 8][cHero + 2] = '-';
	X[rHero - 8][cHero + 3] = '\\';
	X[rHero - 5][cHero + 8] = 201;
	X[rHero - 5][cHero + 9] = 205;

	X[rHero - 2][cHero - 2] = '|';//rhand
	X[rHero - 2][cHero - 3] = '|';
	X[rHero - 3][cHero - 2] = '|';
	X[rHero - 3][cHero - 3] = '|';
	X[rHero - 4][cHero - 3] = '/';
	X[rHero - 4][cHero - 2] = '/';
	X[rHero - 5][cHero - 2] = '/';

}
void ersmherow(char X[][203], int rHero, int cHero)
{

	X[rHero][cHero] = '-';
	X[rHero][cHero + 4] = '-';
	X[rHero][cHero - 1] = '/';
	X[rHero][cHero + 1] = ']';
	X[rHero][cHero + 3] = '[';
	X[rHero][cHero + 5] = '\\';
	X[rHero - 1][cHero] = '/';
	X[rHero - 1][cHero + 2] = '/';
	X[rHero - 1][cHero + 4] = '/';
	//X[rHero-2][cHero] = '[';
	//X[rHero-2][cHero+1] = ']';
	//X[rHero-2][cHero+2] = '|';
	//X[rHero - 2][cHero + 3] = '[';
	//X[rHero - 2][cHero + 4] = ']';
	//X[rHero - 3][cHero ] = '|';
	//X[rHero - 3][cHero+2] = '|';
	//X[rHero - 3][cHero+4] = '|';
	X[rHero - 2][cHero] = '|';
	X[rHero - 2][cHero + 2] = '|';
	X[rHero - 2][cHero + 4] = '|';
	X[rHero - 3][cHero] = '\\';
	X[rHero - 3][cHero + 1] = '-';
	X[rHero - 3][cHero + 2] = '-';
	X[rHero - 3][cHero + 3] = '-';
	X[rHero - 3][cHero + 4] = '/';
	//X[rHero - 4][cHero] = '|';
	//X[rHero - 4][cHero + 1] = '\\';
	//X[rHero - 4][cHero + 3] = '/';
	//X[rHero - 4][cHero + 4] = '|';
	//X[rHero - 5][cHero + 1] = '\\';
	//X[rHero - 5][cHero + 2] = '_';
	//X[rHero - 5][cHero + 3] = '/';
	//X[rHero - 5][cHero + 1] = '\\';
	//X[rHero - 5][cHero + 2] = '_';
	X[rHero - 3][cHero + 6] = '\\';
	X[rHero - 3][cHero + 7] = '/';
	X[rHero - 4][cHero] = '|';
	X[rHero - 4][cHero + 1] = '/';
	X[rHero - 4][cHero + 2] = '_';
	X[rHero - 4][cHero + 3] = '\\';
	X[rHero - 4][cHero + 4] = '|';
	X[rHero - 4][cHero + 5] = '\\';
	X[rHero - 4][cHero + 6] = '\\';
	X[rHero - 4][cHero + 7] = '/';
	X[rHero - 4][cHero + 8] = '/';
	X[rHero - 5][cHero + 2] = '_';
	X[rHero - 5][cHero + 5] = '\\';
	X[rHero - 6][cHero] = '_';
	X[rHero - 6][cHero + 1] = '\\';
	X[rHero - 6][cHero + 2] = '=';
	X[rHero - 6][cHero + 3] = '/';
	X[rHero - 6][cHero + 4] = '_';
	X[rHero - 7][cHero] = '[';
	X[rHero - 7][cHero + 2] = '0';
	X[rHero - 7][cHero + 3] = '0';
	X[rHero - 7][cHero + 4] = '|';
	X[rHero - 8][cHero + 1] = '/';
	X[rHero - 8][cHero + 2] = '-';
	X[rHero - 8][cHero + 3] = '\\';
	X[rHero - 5][cHero + 8] = 201;
	X[rHero - 5][cHero + 9] = 205;

	X[rHero - 2][cHero - 2] = '|';//rhand
	X[rHero - 2][cHero - 3] = '|';
	X[rHero - 3][cHero - 2] = '|';
	X[rHero - 3][cHero - 3] = '|';
	X[rHero - 4][cHero - 3] = '/';
	X[rHero - 4][cHero - 2] = '/';
	X[rHero - 5][cHero - 2] = '/';

}
void ersmherod(char X[][203], int rHero, int cHero)
{

	X[rHero][cHero] = '-';
	X[rHero][cHero + 4] = '-';
	X[rHero][cHero - 1] = '/';
	X[rHero][cHero + 1] = ']';
	X[rHero][cHero + 3] = '[';
	X[rHero][cHero + 5] = '\\';
	X[rHero - 1][cHero] = '/';
	X[rHero - 1][cHero + 2] = '/';
	X[rHero - 1][cHero + 4] = '/';
	//X[rHero-2][cHero] = '[';
	//X[rHero-2][cHero+1] = ']';
	//X[rHero-2][cHero+2] = '|';
	//X[rHero - 2][cHero + 3] = '[';
	//X[rHero - 2][cHero + 4] = ']';
	//X[rHero - 3][cHero ] = '|';
	//X[rHero - 3][cHero+2] = '|';
	//X[rHero - 3][cHero+4] = '|';
	X[rHero - 2][cHero] = '\\';
	X[rHero - 2][cHero + 2] = '\\';
	X[rHero - 2][cHero + 4] = '\\';
	X[rHero - 3][cHero] = '\\';
	X[rHero - 3][cHero + 1] = '-';
	X[rHero - 3][cHero + 2] = '-';
	X[rHero - 3][cHero + 3] = '-';
	X[rHero - 3][cHero + 4] = '/';
	//X[rHero - 4][cHero] = '|';
	//X[rHero - 4][cHero + 1] = '\\';
	//X[rHero - 4][cHero + 3] = '/';
	//X[rHero - 4][cHero + 4] = '|';
	//X[rHero - 5][cHero + 1] = '\\';
	//X[rHero - 5][cHero + 2] = '_';
	//X[rHero - 5][cHero + 3] = '/';
	//X[rHero - 5][cHero + 1] = '\\';
	//X[rHero - 5][cHero + 2] = '_';
	X[rHero - 3][cHero + 6] = '\\';
	X[rHero - 3][cHero + 7] = '/';
	X[rHero - 4][cHero] = '|';
	X[rHero - 4][cHero + 1] = '/';
	X[rHero - 4][cHero + 2] = '_';
	X[rHero - 4][cHero + 3] = '\\';
	X[rHero - 4][cHero + 4] = '|';
	X[rHero - 4][cHero + 5] = '\\';
	X[rHero - 4][cHero + 6] = '\\';
	X[rHero - 4][cHero + 7] = '/';
	X[rHero - 4][cHero + 8] = '/';
	X[rHero - 5][cHero + 2] = '_';
	X[rHero - 5][cHero + 5] = '\\';
	X[rHero - 6][cHero] = '_';
	X[rHero - 6][cHero + 1] = '\\';
	X[rHero - 6][cHero + 2] = '=';
	X[rHero - 6][cHero + 3] = '/';
	X[rHero - 6][cHero + 4] = '_';
	X[rHero - 7][cHero] = '[';
	X[rHero - 7][cHero + 2] = '0';
	X[rHero - 7][cHero + 3] = '0';
	X[rHero - 7][cHero + 4] = '|';
	X[rHero - 8][cHero + 1] = '/';
	X[rHero - 8][cHero + 2] = '-';
	X[rHero - 8][cHero + 3] = '\\';
	X[rHero - 5][cHero + 8] = 201;
	X[rHero - 5][cHero + 9] = 205;

	X[rHero - 2][cHero - 2] = '|';//rhand
	X[rHero - 2][cHero - 3] = '|';
	X[rHero - 3][cHero - 2] = '|';
	X[rHero - 3][cHero - 3] = '|';
	X[rHero - 4][cHero - 3] = '/';
	X[rHero - 4][cHero - 2] = '/';
	X[rHero - 5][cHero - 2] = '/';

}
void Harakdragon(char X[][203], int& rdragon, int& cdragon, char mv, char& lmv, int cthh)
{
	if (mv == '8')
	{
		if (X[rdragon - 6][cdragon] == ' ')
		{
			rdragon--;
		}
	}
	if (mv == '2')
	{
		if (X[rdragon + 5][cdragon] == ' ')
		{
			-
				rdragon++;
		}
	}
	if (mv == '4')
	{
		if (X[rdragon][cdragon - 13] == ' ')
		{

			cdragon--;
		}
	}
	if (mv == '6')
	{
		if (X[rdragon][cdragon + 12] == ' ')
		{
			cdragon++;
		}

	}
	lmv = mv;
	
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

void HarakHero(char X[][203], int& rHero, int& cHero, char mv, char& lmv, int cthh,char dirflag)
{
	
	if (mv == 'w')
	{
		if (X[rHero - 9][cHero] != '*')
		{
			rHero--;
			if (dirflag== 'd')
			{
				cHero+=2;
			}
			if (dirflag == 'a')
			{
				cHero -= 2;
			}
		}
	}
	if (mv == 's')
	{
		if (X[rHero + 1][cHero] != '*')
		{
			rHero++;
		}
	}
	if (mv == 'a')
	{
		if (X[rHero - 5][cHero - 7] != '*')
		{

			cHero--;
			dirflag = 'a';
		}
	}
	if (mv == 'd')
	{
		if (X[rHero - 5][cHero + 10] != '*')
		{
			cHero++;
			dirflag = 'd';
		}

	}
	lmv = mv;

}
void ersmheror(char X[][203], int rHero, int cHero)
{

	X[rHero][cHero] = '-';
	X[rHero][cHero + 4] = '-';
	X[rHero][cHero - 1] = '/';
	X[rHero][cHero + 1] = ']';
	X[rHero][cHero + 3] = '[';
	X[rHero][cHero + 5] = '\\';//leg
	X[rHero - 1][cHero] = '|';
	X[rHero - 1][cHero + 2] = '|';
	X[rHero - 1][cHero + 4] = '|';
	//X[rHero-2][cHero] = '[';
	//X[rHero-2][cHero+1] = ']';
	//X[rHero-2][cHero+2] = '|';
	//X[rHero - 2][cHero + 3] = '[';
	//X[rHero - 2][cHero + 4] = ']';
	//X[rHero - 3][cHero ] = '|';
	//X[rHero - 3][cHero+2] = '|';
	//X[rHero - 3][cHero+4] = '|';
	X[rHero - 2][cHero] = '|';
	X[rHero - 2][cHero + 2] = '|';
	X[rHero - 2][cHero + 4] = '|';
	X[rHero - 3][cHero] = '\\';
	X[rHero - 3][cHero + 1] = '-';
	X[rHero - 3][cHero + 2] = '-';
	X[rHero - 3][cHero + 3] = '-';
	X[rHero - 3][cHero + 4] = '/';
	//X[rHero - 4][cHero] = '|';
	//X[rHero - 4][cHero + 1] = '\\';
	//X[rHero - 4][cHero + 3] = '/';
	//X[rHero - 4][cHero + 4] = '|';
	//X[rHero - 5][cHero + 1] = '\\';
	//X[rHero - 5][cHero + 2] = '_';
	//X[rHero - 5][cHero + 3] = '/';
	//X[rHero - 5][cHero + 1] = '\\';
	//X[rHero - 5][cHero + 2] = '_';
	X[rHero - 3][cHero - 3] = '/';
	X[rHero - 3][cHero - 4] = '\\';
	X[rHero - 4][cHero] = '|';
	X[rHero - 4][cHero + 1] = '/';
	X[rHero - 4][cHero + 2] = '_';
	X[rHero - 4][cHero + 3] = '\\';
	X[rHero - 4][cHero + 4] = '|';
	X[rHero - 4][cHero - 2] = '/';
	X[rHero - 4][cHero - 3] = '/';
	X[rHero - 4][cHero - 4] = '\\';
	X[rHero - 4][cHero - 5] = '\\';
	X[rHero - 5][cHero + 2] = '_';
	X[rHero - 5][cHero - 2] = '/';
	X[rHero - 6][cHero] = '_';
	X[rHero - 6][cHero + 1] = '\\';
	X[rHero - 6][cHero + 2] = '=';
	X[rHero - 6][cHero + 3] = '/';
	X[rHero - 6][cHero + 4] = '_';
	X[rHero - 7][cHero + 4] = ']';
	X[rHero - 7][cHero + 2] = '0';
	X[rHero - 7][cHero + 1] = '0';
	X[rHero - 7][cHero] = '|';
	X[rHero - 8][cHero + 1] = '/';
	X[rHero - 8][cHero + 2] = '-';
	X[rHero - 8][cHero + 3] = '\\';
	X[rHero - 5][cHero - 5] = 201;
	X[rHero - 5][cHero - 6] = 205;

	X[rHero - 2][cHero + 6] = '|';//rhand
	X[rHero - 2][cHero + 7] = '|';
	X[rHero - 3][cHero + 6] = '|';
	X[rHero - 3][cHero + 7] = '|';
	X[rHero - 4][cHero + 7] = '\\';
	X[rHero - 4][cHero + 6] = '\\';
	X[rHero - 5][cHero + 6] = '\\';

}
void ersmheroa(char X[][203], int rHero, int cHero)
{

	X[rHero][cHero] = '-';
	X[rHero][cHero + 4] = '-';
	X[rHero][cHero - 1] = '/';
	X[rHero][cHero + 1] = ']';
	X[rHero][cHero + 3] = '[';
	X[rHero][cHero + 5] = '\\';//leg
	X[rHero - 1][cHero] = '\\';
	X[rHero - 1][cHero + 2] = '\\';
	X[rHero - 1][cHero + 4] = '\\';
	//X[rHero-2][cHero] = '[';
	//X[rHero-2][cHero+1] = ']';
	//X[rHero-2][cHero+2] = '|';
	//X[rHero - 2][cHero + 3] = '[';
	//X[rHero - 2][cHero + 4] = ']';
	//X[rHero - 3][cHero ] = '|';
	//X[rHero - 3][cHero+2] = '|';
	//X[rHero - 3][cHero+4] = '|';
	X[rHero - 2][cHero] = '/';
	X[rHero - 2][cHero + 2] = '/';
	X[rHero - 2][cHero + 4] = '/';
	X[rHero - 3][cHero] = '\\';
	X[rHero - 3][cHero + 1] = '-';
	X[rHero - 3][cHero + 2] = '-';
	X[rHero - 3][cHero + 3] = '-';
	X[rHero - 3][cHero + 4] = '/';
	//X[rHero - 4][cHero] = '|';
	//X[rHero - 4][cHero + 1] = '\\';
	//X[rHero - 4][cHero + 3] = '/';
	//X[rHero - 4][cHero + 4] = '|';
	//X[rHero - 5][cHero + 1] = '\\';
	//X[rHero - 5][cHero + 2] = '_';
	//X[rHero - 5][cHero + 3] = '/';
	//X[rHero - 5][cHero + 1] = '\\';
	//X[rHero - 5][cHero + 2] = '_';
	X[rHero - 3][cHero - 3] = '/';
	X[rHero - 3][cHero - 4] = '\\';
	X[rHero - 4][cHero] = '|';
	X[rHero - 4][cHero + 1] = '/';
	X[rHero - 4][cHero + 2] = '_';
	X[rHero - 4][cHero + 3] = '\\';
	X[rHero - 4][cHero + 4] = '|';
	X[rHero - 4][cHero - 2] = '/';
	X[rHero - 4][cHero - 3] = '/';
	X[rHero - 4][cHero - 4] = '\\';
	X[rHero - 4][cHero - 5] = '\\';
	X[rHero - 5][cHero + 2] = '_';
	X[rHero - 5][cHero - 2] = '/';
	X[rHero - 6][cHero] = '_';
	X[rHero - 6][cHero + 1] = '\\';
	X[rHero - 6][cHero + 2] = '=';
	X[rHero - 6][cHero + 3] = '/';
	X[rHero - 6][cHero + 4] = '_';
	X[rHero - 7][cHero + 4] = ']';
	X[rHero - 7][cHero + 2] = '0';
	X[rHero - 7][cHero + 1] = '0';
	X[rHero - 7][cHero] = '|';
	X[rHero - 8][cHero + 1] = '/';
	X[rHero - 8][cHero + 2] = '-';
	X[rHero - 8][cHero + 3] = '\\';
	X[rHero - 5][cHero - 5] = 201;
	X[rHero - 5][cHero - 6] = 205;

	X[rHero - 2][cHero + 6] = '|';//rhand
	X[rHero - 2][cHero + 7] = '|';
	X[rHero - 3][cHero + 6] = '|';
	X[rHero - 3][cHero + 7] = '|';
	X[rHero - 4][cHero + 7] = '\\';
	X[rHero - 4][cHero + 6] = '\\';
	X[rHero - 5][cHero + 6] = '\\';

}
void herobullet(char X[][203], int rHero, int  cHero, char lmv, char& lb, int& rbullet, int& cbullet)
{

	rbullet = rHero - 5;
	cbullet = cHero + 10;

	X[rbullet][cbullet] = 126;
}
void herobulletr(char X[][203], int rHero, int  cHero, char lmv, char& lb, int& rbullet, int& cbullet)
{

	rbullet = rHero - 5;
	cbullet = cHero - 7;

	X[rbullet][cbullet] = 126;
}
void harakbullet(char X[][203], int& rbullet, int& cbullet, int ct2, int& ctbullet, int& ct, int& ctbulletdiro, int& checkbullet)
{
	if (checkbullet == 0)
	{
		if (ctbullet < 35)
		{
			cbullet++;
			X[rbullet][cbullet] = 126;
			X[rbullet][cbullet - 1] = ' ';
			ctbullet++;
		}
		if (ctbullet > 35)
			ctbulletdiro = 0;

	}

}
void harakbulletr(char X[][203], int& rbullet, int& cbullet, int ct2, int& ctbullet, int& ctbulletdirr, int& checkbullet)
{
	if (checkbullet == 0)
	{


		if (ctbullet < 35)
		{
			cbullet--;
			X[rbullet][cbullet] = 126;
			X[rbullet][cbullet + 1] = ' ';
			ctbullet++;
		}
		if (ctbullet > 35)
			ctbulletdirr = 0;

	}
}
void button(char X[][203], int& chero, int& rhero, int cbutton, int rbutton)
{
	if (rhero == rbutton && chero == cbutton)
	{

	}
}
void groundcheck(char X[][203], int& rHero, int cHero, int cladder, int rladder)
{
	if (X[rHero + 1][cHero] == ' ' && X[rHero + 1][cHero + 4] == ' ' && cHero != cladder && cHero != cladder + 1 && cHero != cladder + 2 || rHero < rladder - 25)
		rHero++;


}
void ersemladder(char X[][203], int rladder, int cladder)
{
	X[rladder][cladder] = 186;
	X[rladder - 1][cladder] = 204;
	X[rladder - 1][cladder + 1] = 205;
	X[rladder - 1][cladder + 2] = 205;
	X[rladder - 1][cladder + 3] = 205;
	X[rladder - 1][cladder + 4] = 205;
	X[rladder][cladder + 5] = 186;
	X[rladder - 1][cladder + 5] = 185;
	X[rladder - 2][cladder] = 186;
	X[rladder - 3][cladder] = 204;
	X[rladder - 3][cladder + 1] = 205;
	X[rladder - 3][cladder + 2] = 205;
	X[rladder - 3][cladder + 3] = 205;
	X[rladder - 3][cladder + 4] = 205;
	X[rladder - 2][cladder + 5] = 186;
	X[rladder - 3][cladder + 5] = 185;

	X[rladder - 4][cladder] = 186;
	X[rladder - 5][cladder] = 204;
	X[rladder - 5][cladder + 1] = 205;
	X[rladder - 5][cladder + 2] = 205;
	X[rladder - 5][cladder + 3] = 205;
	X[rladder - 5][cladder + 4] = 205;
	X[rladder - 4][cladder + 5] = 186;
	X[rladder - 5][cladder + 5] = 185;

	X[rladder - 6][cladder] = 186;
	X[rladder - 7][cladder] = 204;
	X[rladder - 7][cladder + 1] = 205;
	X[rladder - 7][cladder + 2] = 205;
	X[rladder - 7][cladder + 3] = 205;
	X[rladder - 7][cladder + 4] = 205;
	X[rladder - 6][cladder + 5] = 186;
	X[rladder - 7][cladder + 5] = 185;

	X[rladder - 8][cladder] = 186;
	X[rladder - 9][cladder] = 204;
	X[rladder - 9][cladder + 1] = 205;
	X[rladder - 9][cladder + 2] = 205;
	X[rladder - 9][cladder + 3] = 205;
	X[rladder - 9][cladder + 4] = 205;
	X[rladder - 8][cladder + 5] = 186;
	X[rladder - 9][cladder + 5] = 185;

	X[rladder - 10][cladder] = 186;
	X[rladder - 11][cladder] = 204;
	X[rladder - 11][cladder + 1] = 205;
	X[rladder - 11][cladder + 2] = 205;
	X[rladder - 11][cladder + 3] = 205;
	X[rladder - 11][cladder + 4] = 205;
	X[rladder - 10][cladder + 5] = 186;
	X[rladder - 11][cladder + 5] = 185;

	X[rladder - 12][cladder] = 186;
	X[rladder - 13][cladder] = 204;
	X[rladder - 13][cladder + 1] = 205;
	X[rladder - 13][cladder + 2] = 205;
	X[rladder - 13][cladder + 3] = 205;
	X[rladder - 13][cladder + 4] = 205;
	X[rladder - 12][cladder + 5] = 186;
	X[rladder - 13][cladder + 5] = 185;

	X[rladder - 14][cladder] = 186;
	X[rladder - 15][cladder] = 204;
	X[rladder - 15][cladder + 1] = 205;
	X[rladder - 15][cladder + 2] = 205;
	X[rladder - 15][cladder + 3] = 205;
	X[rladder - 15][cladder + 4] = 205;
	X[rladder - 14][cladder + 5] = 186;
	X[rladder - 15][cladder + 5] = 185;

	X[rladder - 16][cladder] = 186;
	X[rladder - 17][cladder] = 204;
	X[rladder - 17][cladder + 1] = 205;
	X[rladder - 17][cladder + 2] = 205;
	X[rladder - 17][cladder + 3] = 205;
	X[rladder - 17][cladder + 4] = 205;
	X[rladder - 16][cladder + 5] = 186;
	X[rladder - 17][cladder + 5] = 185;

	X[rladder - 18][cladder] = 186;
	X[rladder - 19][cladder] = 204;
	X[rladder - 19][cladder + 1] = 205;
	X[rladder - 19][cladder + 2] = 205;
	X[rladder - 19][cladder + 3] = 205;
	X[rladder - 19][cladder + 4] = 205;
	X[rladder - 18][cladder + 5] = 186;
	X[rladder - 19][cladder + 5] = 185;

	X[rladder - 20][cladder] = 186;
	X[rladder - 21][cladder] = 204;
	X[rladder - 21][cladder + 1] = 205;
	X[rladder - 21][cladder + 2] = 205;
	X[rladder - 21][cladder + 3] = 205;
	X[rladder - 21][cladder + 4] = 205;
	X[rladder - 20][cladder + 5] = 186;
	X[rladder - 21][cladder + 5] = 185;

	X[rladder - 22][cladder] = 186;
	X[rladder - 23][cladder] = 204;
	X[rladder - 23][cladder + 1] = 205;
	X[rladder - 23][cladder + 2] = 205;
	X[rladder - 23][cladder + 3] = 205;
	X[rladder - 23][cladder + 4] = 205;
	X[rladder - 22][cladder + 5] = 186;
	X[rladder - 23][cladder + 5] = 185;


	X[rladder - 24][cladder] = 186;
	X[rladder - 24][cladder + 5] = 186;

	X[rladder - 24][cladder - 1] = ' ';

	X[rladder - 24][cladder] = ' ';
	X[rladder - 24][cladder + 1] = ' ';
	X[rladder - 24][cladder + 2] = ' ';
	X[rladder - 24][cladder + 3] = ' ';
	X[rladder - 24][cladder + 4] = ' ';
	X[rladder - 24][cladder + 5] = ' ';
	X[rladder - 24][cladder + 6] = ' ';


}
void ladder(char X[][203], int rladder, int cladder, int& rHero, int cHero, char mv)
{
	if (cladder == cHero && mv == 'w')
	{
		rHero--;
	}
}
void killenemyg(char X[][203], int rEnmyg, int cEnmyg, int rbullet, int cbullet, int ctbullet, int& ctenmydie, int& checkbullet)
{
	if (cbullet == cEnmyg - 5)
	{
		ctenmydie++;
		checkbullet++;
	}

	/////////////////////////////////////
}
void elev(char X[][203], int relev, int celev) {
	X[relev][celev] = ':';
	X[relev][celev + 1] = ':';
	X[relev][celev + 2] = ':';
	X[relev][celev + 3] = ':';
	X[relev][celev + 4] = ':';
	X[relev][celev + 5] = ':';
	X[relev][celev + 6] = ':';
	X[relev][celev + 7] = ':';
	X[relev][celev + 8] = ':';
	X[relev][celev + 9] = ':';
	X[relev][celev + 10] = ':';
	X[relev][celev + 11] = ':';
	X[relev][celev + 12] = ':';
	X[relev][celev + 13] = ':';
	X[relev][celev + 14] = ':';
	X[relev][celev + 15] = ':';
	X[relev][celev + 16] = ':';
	X[relev][celev + 17] = ':';
	X[relev][celev + 18] = ':';
	X[relev][celev + 19] = ':';
	X[relev][celev + 20] = ':';
	X[relev][celev + 21] = ':';
	X[relev][celev + 22] = ':';
	X[relev][celev + 23] = ':';
	X[relev][celev + 24] = ':';
	X[relev][celev + 25] = ':';
	X[relev][celev + 26] = ':';
	X[relev][celev + 27] = ':';
	X[relev][celev + 28] = ':';
	X[relev][celev + 29] = ':';
	X[relev - 1][celev] = ':';
	X[relev - 1][celev + 1] = ':';
	X[relev - 1][celev + 2] = ' ';
	X[relev - 1][celev + 3] = ' ';
	X[relev - 1][celev + 4] = ' ';
	X[relev - 1][celev + 5] = ' ';
	X[relev - 1][celev + 6] = ' ';
	X[relev - 1][celev + 7] = ' ';
	X[relev - 1][celev + 8] = ' ';
	X[relev - 1][celev + 9] = ' ';
	X[relev - 1][celev + 10] = ' ';
	X[relev - 1][celev + 11] = ' ';
	X[relev - 1][celev + 12] = ' ';
	X[relev - 1][celev + 13] = ' ';
	X[relev - 1][celev + 14] = ' ';
	X[relev - 1][celev + 15] = ' ';
	X[relev - 1][celev + 16] = ' ';
	X[relev - 1][celev + 17] = ' ';
	X[relev - 1][celev + 18] = ' ';
	X[relev - 1][celev + 19] = ' ';
	X[relev - 1][celev + 20] = ' ';
	X[relev - 1][celev + 21] = ' ';
	X[relev - 1][celev + 22] = ' ';
	X[relev - 1][celev + 23] = ' ';
	X[relev - 1][celev + 24] = ' ';
	X[relev - 1][celev + 25] = ' ';
	X[relev - 1][celev + 26] = ' ';
	X[relev - 1][celev + 27] = ' ';
	X[relev - 1][celev + 28] = ':';
	X[relev - 1][celev + 29] = ':';
	X[relev - 2][celev] = ':';
	X[relev - 2][celev + 1] = ':';
	X[relev - 2][celev + 2] = ' ';
	X[relev - 2][celev + 3] = ' ';
	X[relev - 2][celev + 4] = ' ';
	X[relev - 2][celev + 5] = ' ';
	X[relev - 2][celev + 6] = ' ';
	X[relev - 2][celev + 7] = ' ';
	X[relev - 2][celev + 8] = ' ';
	X[relev - 2][celev + 9] = ' ';
	X[relev - 2][celev + 10] = ' ';
	X[relev - 2][celev + 11] = ' ';
	X[relev - 2][celev + 12] = ' ';
	X[relev - 2][celev + 13] = ' ';
	X[relev - 2][celev + 14] = ' ';
	X[relev - 2][celev + 15] = ' ';
	X[relev - 2][celev + 16] = ' ';
	X[relev - 2][celev + 17] = ' ';
	X[relev - 2][celev + 18] = ' ';
	X[relev - 2][celev + 19] = ' ';
	X[relev - 2][celev + 20] = ' ';
	X[relev - 2][celev + 21] = ' ';
	X[relev - 2][celev + 22] = ' ';
	X[relev - 2][celev + 23] = ' ';
	X[relev - 2][celev + 24] = ' ';
	X[relev - 2][celev + 25] = ' ';
	X[relev - 2][celev + 26] = ' ';
	X[relev - 2][celev + 27] = ' ';
	X[relev - 2][celev + 28] = ':';
	X[relev - 2][celev + 29] = ':';
	X[relev - 3][celev] = ':';
	X[relev - 3][celev + 1] = ':';
	X[relev - 3][celev + 2] = ' ';
	X[relev - 3][celev + 3] = ' ';
	X[relev - 3][celev + 4] = ' ';
	X[relev - 3][celev + 5] = ' ';
	X[relev - 3][celev + 6] = ' ';
	X[relev - 3][celev + 7] = ' ';
	X[relev - 3][celev + 8] = ' ';
	X[relev - 3][celev + 9] = ' ';
	X[relev - 3][celev + 10] = ' ';
	X[relev - 3][celev + 11] = ' ';
	X[relev - 3][celev + 12] = ' ';
	X[relev - 3][celev + 13] = ' ';
	X[relev - 3][celev + 14] = ' ';
	X[relev - 3][celev + 15] = ' ';
	X[relev - 3][celev + 16] = ' ';
	X[relev - 3][celev + 17] = ' ';
	X[relev - 3][celev + 18] = ' ';
	X[relev - 3][celev + 19] = ' ';
	X[relev - 3][celev + 20] = ' ';
	X[relev - 3][celev + 21] = ' ';
	X[relev - 3][celev + 22] = ' ';
	X[relev - 3][celev + 23] = ' ';
	X[relev - 3][celev + 24] = ' ';
	X[relev - 3][celev + 25] = ' ';
	X[relev - 3][celev + 26] = ' ';
	X[relev - 3][celev + 27] = ' ';
	X[relev - 3][celev + 28] = ':';
	X[relev - 3][celev + 29] = ':';
}

void elevm(char X[][203], int& relev, int& celev, int& cdragon, int& rdragon, int& yf) {
	if (celev == cdragon || cdragon > celev + 8 && cdragon < celev + 29)
	{
		if (yf == 1)
		{


			rdragon--;
			relev--;
			if (celev >= 105) {
				celev -= 2;
				cdragon -= 2;
			}
		}
	}

	if (relev == 25 || celev == 105)
	{
		yf = 2;
	}
}



void ersmbat(char X[][203], int rbat, int cbat) {
	X[rbat][cbat] = '/';
	X[rbat][cbat + 1] = '\\';
	X[rbat][cbat + 19] = '/';
	X[rbat][cbat + 20] = '\\';
	X[rbat + 1][cbat - 1] = '/';
	X[rbat + 1][cbat + 1] = '\\';
	//X[rbat + 1][cbat + 2] = '`';
	X[rbat + 1][cbat + 3] = '.';
	X[rbat + 1][cbat + 4] = '_';
	X[rbat + 1][cbat + 8] = '(';
	X[rbat + 1][cbat + 9] = '\\';
	X[rbat + 1][cbat + 10] = '_';
	X[rbat + 1][cbat + 11] = '/';
	X[rbat + 1][cbat + 12] = ')';
	X[rbat + 1][cbat + 16] = '_';
	X[rbat + 1][cbat + 17] = '.';
	//X[rbat + 1][cbat + 18] = '`';
	X[rbat + 1][cbat + 19] = '/';
	X[rbat + 1][cbat + 21] = '\\';
	X[rbat + 2][cbat - 1] = '|';
	X[rbat + 2][cbat] = '.';
	X[rbat + 2][cbat + 1] = '`';
	X[rbat + 2][cbat + 2] = '`';
	X[rbat + 2][cbat + 3] = '.';
	X[rbat + 2][cbat + 4] = '_';
	X[rbat + 2][cbat + 5] = '`';
	X[rbat + 2][cbat + 6] = '-';
	X[rbat + 2][cbat + 7] = '-';
	X[rbat + 2][cbat + 8] = '(';
	X[rbat + 2][cbat + 9] = 'o';
	X[rbat + 2][cbat + 10] = '.';
	X[rbat + 2][cbat + 11] = 'o';
	X[rbat + 2][cbat + 12] = ')';
	X[rbat + 2][cbat + 13] = '-';
	X[rbat + 2][cbat + 14] = '-';
	X[rbat + 2][cbat + 15] = '`';
	X[rbat + 2][cbat + 16] = '_';
	X[rbat + 2][cbat + 17] = '.';
	X[rbat + 2][cbat + 18] = '`';
	X[rbat + 2][cbat + 19] = '`';
	X[rbat + 2][cbat + 20] = '.';
	X[rbat + 2][cbat + 21] = '|';
	X[rbat + 3][cbat] = '\\';
	X[rbat + 3][cbat + 1] = '_';
	X[rbat + 3][cbat + 3] = '/';
	X[rbat + 3][cbat + 6] = ';';
	X[rbat + 3][cbat + 7] = '=';
	X[rbat + 3][cbat + 8] = '/';
	X[rbat + 3][cbat + 10] = '"';
	X[rbat + 3][cbat + 12] = '\\';
	X[rbat + 3][cbat + 13] = '=';
	X[rbat + 3][cbat + 14] = ';';
	//X[rbat + 3][cbat + 14] = '`';
	X[rbat + 3][cbat + 16] = '\\';
	X[rbat + 3][cbat + 18] = '_';
	X[rbat + 3][cbat + 19] = '/';
	X[rbat + 4][cbat + 2] = '`';
	X[rbat + 4][cbat + 3] = '\\';
	X[rbat + 4][cbat + 4] = '_';
	X[rbat + 4][cbat + 5] = '_';
	X[rbat + 4][cbat + 6] = '|';
	X[rbat + 4][cbat + 8] = '\\';
	X[rbat + 4][cbat + 9] = '_';
	X[rbat + 4][cbat + 10] = '_';
	X[rbat + 4][cbat + 11] = '_';
	X[rbat + 4][cbat + 12] = '//';
	X[rbat + 4][cbat + 14] = '|';
	X[rbat + 4][cbat + 15] = '_';
	X[rbat + 4][cbat + 16] = '_';
	X[rbat + 4][cbat + 17] = '/';
	X[rbat + 4][cbat + 18] = '`';
	X[rbat + 5][cbat + 7] = '\\';
	X[rbat + 5][cbat + 8] = '(';
	X[rbat + 5][cbat + 9] = '_';
	X[rbat + 5][cbat + 10] = '|';
	X[rbat + 5][cbat + 11] = '_';
	X[rbat + 5][cbat + 12] = ')';
	X[rbat + 5][cbat + 13] = '/';
	X[rbat + 6][cbat + 8] = '"';
	X[rbat + 6][cbat + 10] = '`';
	X[rbat + 6][cbat + 12] = '"';









}
void harakbat(char X[][203], int& rbat, int& cbat, int& cb, int& ctb, int rbomb, int cbomb, int& bd) {
	if (cb == 1) {
		cbat -= 2;
		ctb++;
	}
	if (ctb == 20) {
		cb = 2;
	}
	if (ctb == 0) {
		cb = 1;
	}
	if (cb == 2) {
		cbat += 2;
		ctb--;
	}
	//if (ctb == 10) {
		//bd = 1;
	//}

}
void bomb(char X[][203], int rbat, int cbat, int rbomb, int cbomb, int& bc) {
	rbomb = rbat + 7;
	cbomb = cbat + 10;
	X[rbomb][cbomb] = '|';
	X[rbomb][cbomb + 1] = '\\';
	X[rbomb][cbomb + 2] = '*';
	X[rbomb][cbomb + 3] = '*';
	X[rbomb][cbomb + 4] = '/';
	X[rbomb][cbomb + 5] = '|';
	X[rbomb + 1][cbomb] = '\\';
	X[rbomb + 1][cbomb + 2] = '=';
	X[rbomb + 1][cbomb + 3] = '=';
	X[rbomb + 1][cbomb + 5] = '/';
	X[rbomb + 2][cbomb + 1] = '|';
	X[rbomb + 2][cbomb + 4] = '|';
	X[rbomb + 3][cbomb + 1] = '|';
	X[rbomb + 3][cbomb + 4] = '|';
	X[rbomb + 4][cbomb + 1] = '\\';
	X[rbomb + 4][cbomb + 4] = '/';
	X[rbomb + 5][cbomb + 2] = '\\';
	X[rbomb + 5][cbomb + 3] = '/';
	bc = 1;






}
void harakbomb(char X[][203], int rbat, int cbat, int& rbomb, int& cbomb, int& bc)
{
	///rbomb = rbat + 7;
	//cbomb = cbat + 10;
	/*
	X[rbomb][cbomb] = ' ';
	X[rbomb][cbomb + 1] = ' ';
	X[rbomb][cbomb + 2] = ' ';
	X[rbomb][cbomb + 3] = ' ';
	X[rbomb][cbomb + 4] = ' ';
	X[rbomb][cbomb + 5] = ' ';
	X[rbomb + 1][cbomb] = ' ';
	X[rbomb + 1][cbomb + 2] = ' ';
	X[rbomb + 1][cbomb + 3] = ' ';
	X[rbomb + 1][cbomb + 5] = ' ';
	X[rbomb + 2][cbomb + 1] = ' ';
	X[rbomb + 2][cbomb + 4] = ' ';
	X[rbomb + 3][cbomb + 1] = ' ';
	X[rbomb + 3][cbomb + 4] = ' ';
	X[rbomb + 4][cbomb + 1] = ' ';
	X[rbomb + 4][cbomb + 4] = ' ';
	X[rbomb + 5][cbomb + 2] = ' ';
	X[rbomb + 5][cbomb + 3] = ' ';
	X[rbomb - 1][cbomb] = ' ';
	X[rbomb - 1][cbomb + 1] = ' ';
	X[rbomb - 1][cbomb + 2] = ' ';
	X[rbomb - 1][cbomb + 3] = ' ';
	X[rbomb - 1][cbomb + 4] = ' ';
	X[rbomb - 1][cbomb + 5] = ' ';
	*/
	X[rbomb][cbomb] = '|';
	X[rbomb][cbomb + 1] = '\\';
	X[rbomb][cbomb + 2] = '*';
	X[rbomb][cbomb + 3] = '*';
	X[rbomb][cbomb + 4] = '/';
	X[rbomb][cbomb + 5] = '|';
	X[rbomb + 1][cbomb] = '\\';
	X[rbomb + 1][cbomb + 2] = '=';
	X[rbomb + 1][cbomb + 3] = '=';
	X[rbomb + 1][cbomb + 5] = '/';
	X[rbomb + 2][cbomb + 1] = '|';
	X[rbomb + 2][cbomb + 4] = '|';
	X[rbomb + 3][cbomb + 1] = '|';
	X[rbomb + 3][cbomb + 4] = '|';
	X[rbomb + 4][cbomb + 1] = '\\';
	X[rbomb + 4][cbomb + 4] = '/';
	X[rbomb + 5][cbomb + 2] = '\\';
	X[rbomb + 5][cbomb + 3] = '/';
	X[rbomb - 1][cbomb] = ' ';
	X[rbomb - 1][cbomb + 1] = ' ';
	X[rbomb - 1][cbomb + 2] = ' ';
	X[rbomb - 1][cbomb + 3] = ' ';
	X[rbomb - 1][cbomb + 4] = ' ';
	X[rbomb - 1][cbomb + 5] = ' ';
	rbomb++;
	/*if (X[rbomb + 6][cbomb] == ' ') {
		X[rbomb][cbomb] = '|';
		X[rbomb][cbomb + 1] = '\\';
		X[rbomb][cbomb + 2] = '*';
		X[rbomb][cbomb + 3] = '*';
		X[rbomb][cbomb + 4] = '/';
		X[rbomb][cbomb + 5] = '|';
		X[rbomb + 1][cbomb] = '\\';
		X[rbomb + 1][cbomb + 2] = '=';
		X[rbomb + 1][cbomb + 3] = '=';
		X[rbomb + 1][cbomb + 5] = '/';
		X[rbomb + 2][cbomb + 1] = '|';
		X[rbomb + 2][cbomb + 4] = '|';
		X[rbomb + 3][cbomb + 1] = '|';
		X[rbomb + 3][cbomb + 4] = '|';
		X[rbomb + 4][cbomb + 1] = '\\';
		X[rbomb + 4][cbomb + 4] = '/';
		X[rbomb + 5][cbomb + 2] = '\\';
		X[rbomb + 5][cbomb + 3] = '/';
		X[rbomb - 1][cbomb] = ' ';
		X[rbomb - 1][cbomb + 1] = ' ';
		X[rbomb - 1][cbomb + 2] = ' ';
		X[rbomb - 1][cbomb + 3] = ' ';
		X[rbomb - 1][cbomb + 4] = ' ';
		X[rbomb - 1][cbomb + 5] = ' ';
		rbomb++;
		bc = 2;
	}
	*/

}
void laser(char X[][203], int rlaser, int claser, int& ctlaser) {
	ctlaser++;
	if (ctlaser > 7 && ctlaser < 11) {
		X[rlaser][claser] = 178;
		X[rlaser + 1][claser] = 178;
		X[rlaser + 2][claser] = 178;
		X[rlaser + 3][claser] = 178;
		X[rlaser + 4][claser] = 178;
		X[rlaser + 5][claser] = 178;
		X[rlaser + 6][claser] = 178;
		X[rlaser + 7][claser] = 178;
		X[rlaser + 8][claser] = 178;
		X[rlaser + 9][claser] = 178;
		X[rlaser + 10][claser] = 178;
		X[rlaser + 11][claser] = 178;
		X[rlaser + 12][claser] = 178;
		X[rlaser + 13][claser] = 178;
		X[rlaser + 14][claser] = 178;
		X[rlaser + 15][claser] = 178;
		X[rlaser + 16][claser] = 178;
		X[rlaser + 17][claser] = 178;
		X[rlaser + 18][claser] = 178;
		X[rlaser + 19][claser] = 178;
		X[rlaser + 20][claser] = 178;
		X[rlaser + 21][claser] = 178;
		X[rlaser + 22][claser] = 178;
		X[rlaser + 23][claser] = 178;
		//X[rlaser + 24][claser] = 178;
		//X[rlaser][claser + 25] = 178;
	}
	if (ctlaser == 13) {
		ctlaser = 0;
	}
}
void bird(char X[][203], int rbird, int cbird) {
	X[rbird][cbird] = '>';
	X[rbird - 1][cbird + 1] = 44;
	X[rbird - 1][cbird + 2] = '_';
	X[rbird][cbird + 1] = 39;
	X[rbird][cbird + 3] = ')';
	X[rbird + 1][cbird] = '(';
	X[rbird + 1][cbird + 2] = '(';
	X[rbird + 1][cbird + 4] = '\\';
	X[rbird + 2][cbird + 1] = 39;
	X[rbird + 2][cbird + 2] = 39;
	X[rbird + 2][cbird + 3] = '|';
	X[rbird + 2][cbird + 4] = '\\';
}
void bird2(char X[][203], int rbird2, int cbird2) {
	X[rbird2][cbird2] = '>';
	X[rbird2 - 1][cbird2 + 1] = 44;
	X[rbird2 - 1][cbird2 + 2] = '_';
	X[rbird2][cbird2 + 1] = 39;
	X[rbird2][cbird2 + 3] = ')';
	X[rbird2 + 1][cbird2] = '(';
	X[rbird2 + 1][cbird2 + 2] = '(';
	X[rbird2 + 1][cbird2 + 4] = '\\';
	X[rbird2 + 2][cbird2 + 1] = 39;
	X[rbird2 + 2][cbird2 + 2] = 39;
	X[rbird2 + 2][cbird2 + 3] = '|';
	X[rbird2 + 2][cbird2 + 4] = '\\';
}
void ersmmonster(char X[][203], int rm, int cm)
{
	/// start from head 
	X[rm - 2][cm + 1] = '_';
	X[rm - 2][cm + 2] = '.';
	X[rm - 2][cm + 3] = '-';
	X[rm - 2][cm + 4] = '-';
	X[rm - 2][cm + 5] = '-';
	X[rm - 2][cm + 6] = '.';
	X[rm - 2][cm + 7] = '_';
	X[rm - 1][cm] = '/';
	X[rm - 1][cm + 8] = '\\';
	X[rm][cm - 1] = '|'; // o point
	X[rm][cm] = '.';// 0 point
	X[rm][cm + 1] = '-';
	X[rm][cm + 5] = '.';
	X[rm][cm + 6] = '-';
	X[rm + 1][cm + 1] = '*';
	X[rm + 1][cm + 2] = ')';
	X[rm + 1][cm + 6] = '*';
	X[rm + 1][cm + 7] = ')';
	X[rm + 1][cm + 9] = '|';
	X[rm][cm + 9] = '|';
	X[rm + 1][cm - 1] = '\\';
	X[rm + 2][cm] = ')';
	X[rm + 2][cm + 3] = '^';
	X[rm + 2][cm + 4] = '`';
	X[rm][cm + 10] = '_';
	X[rm][cm + 11] = '_';
	X[rm + 1][cm + 10] = '\\';
	X[rm + 1][cm + 11] = '_';
	X[rm + 1][cm + 12] = '/';
	X[rm + 1][cm + 13] = '\\';
	X[rm + 2][cm + 14] = '\\';
	X[rm + 2][cm + 13] = '-';
	X[rm + 2][cm + 12] = '\\';
	X[rm + 2][cm + 10] = '\\';
	X[rm + 2][cm + 9] = '(';
	X[rm + 2][cm + 8] = '/';
	X[rm + 2][cm + 7] = '_';
	X[rm + 3][cm + 6] = '`';
	X[rm + 3][cm + 5] = 'V';
	X[rm + 3][cm + 4] = 'u';
	X[rm + 3][cm + 3] = 'u';
	X[rm + 3][cm + 2] = '"';
	X[rm + 3][cm + 1] = 'v';
	X[rm + 3][cm] = '`';
	X[rm + 3][cm + 1] = 'v';
	X[rm + 3][cm + 9] = '/';
	X[rm + 3][cm + 10] = '/';
	X[rm + 3][cm + 12] = '/';
	X[rm + 3][cm + 13] = '-';
	X[rm + 3][cm + 14] = '/';
	X[rm + 4][cm + 13] = '/';
	X[rm + 4][cm + 12] = '-';
	X[rm + 4][cm + 11] = '/';
	X[rm + 4][cm + 9] = '`';
	X[rm + 4][cm + 8] = '<';
	X[rm + 4][cm + 7] = '.';
	X[rm + 4][cm + 6] = '.';
	X[rm + 4][cm + 5] = '<';
	X[rm + 5][cm + 4] = '_';
	X[rm + 5][cm + 6] = ',';
	X[rm + 5][cm + 7] = '-';
	X[rm + 5][cm + 8] = '.';
	X[rm + 5][cm + 10] = '/';
	X[rm + 5][cm + 11] = '-';
	X[rm + 5][cm + 12] = '.';
	X[rm + 5][cm + 13] = '-';
	X[rm + 5][cm + 14] = ',';
	//X[rm + 5][cm + 15] = '-';
	//X[rm + 5][cm + 15] = ',';
	X[rm + 5][cm + 15] = '_';

	////////////torso
	X[rm + 6][cm - 2] = ',';
	X[rm + 6][cm - 1] = '-';
	X[rm + 6][cm] = '-';
	X[rm + 6][cm + 1] = '-';
	X[rm + 6][cm + 2] = '-';
	X[rm + 6][cm + 3] = '(';
	X[rm + 6][cm + 5] = '(';
	X[rm + 6][cm + 9] = '/';
	X[rm + 6][cm + 11] = '|';
	X[rm + 6][cm + 14] = ')';
	X[rm + 6][cm + 16] = ')';
	X[rm + 6][cm + 17] = '-';
	X[rm + 6][cm + 18] = '-';
	X[rm + 6][cm + 19] = '-';
	X[rm + 6][cm + 20] = '-';
	X[rm + 6][cm + 21] = ',';
	X[rm + 7][cm - 2] = '\\';
	X[rm + 7][cm] = '.';
	X[rm + 7][cm + 1] = '-';
	X[rm + 7][cm + 2] = '-';
	X[rm + 7][cm + 3] = '-';
	X[rm + 7][cm + 15] = '-';
	X[rm + 7][cm + 16] = '-';
	X[rm + 7][cm + 17] = '-';
	X[rm + 7][cm + 21] = '/';
	X[rm + 7][cm + 18] = '.';
	X[rm + 7][cm + 5] = '(';
	X[rm + 7][cm + 7] = '`';
	X[rm + 7][cm + 8] = '_';
	X[rm + 7][cm + 9] = 39;
	X[rm + 7][cm + 10] = '`';
	X[rm + 7][cm + 11] = '_';
	X[rm + 7][cm + 12] = ',';
	X[rm + 7][cm + 13] = 39;
	X[rm + 8][cm - 1] = '\\';
	X[rm + 8][cm + 1] = '\\';
	X[rm + 8][cm + 20] = '/';
	//X[rm + 8][cm + 18] = '.';
	X[rm + 8][cm + 5] = '(';
	X[rm + 8][cm + 7] = '`';
	X[rm + 8][cm + 8] = '_';
	X[rm + 8][cm + 9] = 39;
	X[rm + 8][cm + 10] = '`';
	X[rm + 8][cm + 11] = '_';
	X[rm + 8][cm + 12] = ',';
	X[rm + 8][cm + 13] = 39;
	X[rm + 8][cm + 14] = ')';
	X[rm + 7][cm + 14] = ')';
	X[rm + 9][cm + 7] = '`';
	X[rm + 9][cm + 8] = '_';
	X[rm + 9][cm + 9] = 39;
	X[rm + 9][cm + 10] = '`';
	X[rm + 9][cm + 11] = '_';
	X[rm + 9][cm + 12] = ',';
	X[rm + 9][cm + 13] = 39;
	X[rm + 8][cm + 17] = '/';
	X[rm + 9][cm] = ')';
	X[rm + 9][cm + 2] = '`';
	X[rm + 9][cm + 3] = ',';
	X[rm + 9][cm + 15] = ',';
	X[rm + 9][cm + 16] = '`';
	X[rm + 9][cm + 19] = '(';
	X[rm + 10][cm - 1] = 39;
	X[rm + 10][cm] = '/';
	X[rm + 10][cm + 1] = '|';
	X[rm + 10][cm + 2] = '|';
	X[rm + 10][cm + 16] = '|';
	X[rm + 10][cm + 17] = '|';
	X[rm + 10][cm + 18] = '\\';
	X[rm + 10][cm + 19] = '`';

}
/*
void killmonster(char X[][203], int& cbullet, int& cm, int& k,int hm) /// shahd now
{
	if (cbullet == cm<19&&cm>-2)
	{
		hm--;

	}
	if (hm == 0)
	{
		k = 1;
	}


}*/
/*
void deadmonster(char X[][203], int rm, int cm) {
	/// start from head
	X[rm - 2][cm + 1] = ' ';
	X[rm - 2][cm + 2] = ' ';
	X[rm - 2][cm + 3] = ' ';
	X[rm - 2][cm + 4] = ' ';
	X[rm - 2][cm + 5] = ' ';
	X[rm - 2][cm + 6] = ' ';
	X[rm - 2][cm + 7] = ' ';
	X[rm - 1][cm] = ' ';
	X[rm - 1][cm + 8] = ' ';
	X[rm][cm - 1] = ' '; // o point
	X[rm][cm] = ' ';// 0 point
	X[rm][cm + 1] = ' ';
	X[rm][cm + 5] = ' ';
	X[rm][cm + 6] = ' ';
	X[rm + 1][cm + 1] = ' ';
	X[rm + 1][cm + 2] = ' ';
	X[rm + 1][cm + 6] = ' ';
	X[rm + 1][cm + 7] = ' ';
	X[rm + 1][cm + 9] = ' ';
	X[rm][cm + 9] = ' ';
	X[rm + 1][cm - 1] = ' ';
	X[rm + 2][cm] = ' ';
	X[rm + 2][cm + 3] = ' ';
	X[rm + 2][cm + 4] = ' ';
	X[rm][cm + 10] = ' ';
	X[rm][cm + 11] = ' ';
	X[rm + 1][cm + 10] = ' ';
	X[rm + 1][cm + 11] = ' ';
	X[rm + 1][cm + 12] = ' ';
	X[rm + 1][cm + 13] = ' ';
	X[rm + 2][cm + 14] = ' ';
	X[rm + 2][cm + 13] = ' ';
	X[rm + 2][cm + 12] = ' ';
	X[rm + 2][cm + 10] = ' ';
	X[rm + 2][cm + 9] = ' ';
	X[rm + 2][cm + 8] = ' ';
	X[rm + 2][cm + 7] = ' ';
	X[rm + 3][cm + 6] = ' ';
	X[rm + 3][cm + 5] = ' ';
	X[rm + 3][cm + 4] = ' ';
	X[rm + 3][cm + 3] = ' ';
	X[rm + 3][cm + 2] = ' ';
	X[rm + 3][cm + 1] = ' ';
	X[rm + 3][cm] = ' ';
	X[rm + 3][cm + 1] = ' ';
	X[rm + 3][cm + 9] = ' ';
	X[rm + 3][cm + 10] = ' ';
	X[rm + 3][cm + 12] = ' ';
	X[rm + 3][cm + 13] = ' ';
	X[rm + 3][cm + 14] = ' ';
	X[rm + 4][cm + 13] = ' ';
	X[rm + 4][cm + 12] = ' ';
	X[rm + 4][cm + 11] = ' ';
	X[rm + 4][cm + 9] = ' ';
	X[rm + 4][cm + 8] = ' ';
	X[rm + 4][cm + 7] = ' ';
	X[rm + 4][cm + 6] = ' ';
	X[rm + 4][cm + 5] = ' ';
	X[rm + 5][cm + 4] = ' ';
	X[rm + 5][cm + 6] = ' ';
	X[rm + 5][cm + 7] = ' ';
	X[rm + 5][cm + 8] = ' ';
	X[rm + 5][cm + 10] = ' ';
	X[rm + 5][cm + 11] = ' ';
	X[rm + 5][cm + 12] = ' ';
	X[rm + 5][cm + 13] = ' ';
	X[rm + 5][cm + 14] = ' ';
	//X[rm + 5][cm + 15] = '-';
	//X[rm + 5][cm + 15] = ',';
	X[rm + 5][cm + 15] = ' ';

	////////////torso
	X[rm + 6][cm - 2] = ' ';
	X[rm + 6][cm - 1] = ' ';
	X[rm + 6][cm] = ' ';
	X[rm + 6][cm + 1] = ' ';
	X[rm + 6][cm + 2] = ' ';
	X[rm + 6][cm + 3] = ' ';
	X[rm + 6][cm + 5] = ' ';
	X[rm + 6][cm + 9] = ' ';
	X[rm + 6][cm + 11] = ' ';
	X[rm + 6][cm + 14] = ' ';
	X[rm + 6][cm + 16] = ' ';
	X[rm + 6][cm + 17] = ' ';
	X[rm + 6][cm + 18] = ' ';
	X[rm + 6][cm + 19] = ' ';
	X[rm + 6][cm + 20] = ' ';
	X[rm + 6][cm + 21] = ' ';
	X[rm + 7][cm - 2] = ' ';
	X[rm + 7][cm] = ' ';
	X[rm + 7][cm + 1] = ' ';
	X[rm + 7][cm + 2] = ' ';
	X[rm + 7][cm + 3] = ' ';
	X[rm + 7][cm + 15] =  ' ';
	X[rm + 7][cm + 16] = ' ';
	X[rm + 7][cm + 17] = ' ';
	X[rm + 7][cm + 21] = ' ';
	X[rm + 7][cm + 18] = ' ';
	X[rm + 7][cm + 5] = ' ';
	X[rm + 7][cm + 7] = ' ';
	X[rm + 7][cm + 8] = ' ';
	X[rm + 7][cm + 9] = ' ';
	X[rm + 7][cm + 10] = ' ';
	X[rm + 7][cm + 11] = ' ';
	X[rm + 7][cm + 12] = ',';
	X[rm + 7][cm + 13] = ' ';
	X[rm + 8][cm - 1] = ' ';
	X[rm + 8][cm + 1] = ' ';
	X[rm + 8][cm + 20] = ' ';
	//X[rm + 8][cm + 18] = '.';
	X[rm + 8][cm + 5] = ' ';
	X[rm + 8][cm + 7] = ' ';
	X[rm + 8][cm + 8] = ' ';
	X[rm + 8][cm + 9] = ' ';
	X[rm + 8][cm + 10] =  ' ';
	X[rm + 8][cm + 11] = ' ';
	X[rm + 8][cm + 12] = ' ';
	X[rm + 8][cm + 13] = ' ';
	X[rm + 8][cm + 14] = ' ';
	X[rm + 7][cm + 14] = ' ';
	X[rm + 9][cm + 7] = ' ';
	X[rm + 9][cm + 8] = ' ';
	X[rm + 9][cm + 9] = ' ';
	X[rm + 9][cm + 10] = ' ';
	X[rm + 9][cm + 11] = ' ';
	X[rm + 9][cm + 12] = ' ';
	X[rm + 9][cm + 13] = ' ';
	X[rm + 8][cm + 17] = ' ';
	X[rm + 9][cm] = ' ';
	X[rm + 9][cm + 2] = ' ';
	X[rm + 9][cm + 3] = ' ';
	X[rm + 9][cm + 15] = ' ';
	X[rm + 9][cm + 16] = ' ';
	X[rm + 9][cm + 19] = ' ';
	X[rm + 10][cm - 1] = ' ';
	X[rm + 10][cm] = ' ';
	X[rm + 10][cm + 1] = ' ';
	X[rm + 10][cm + 2] = ' ';
	X[rm + 10][cm + 16] = ' ';
	X[rm + 10][cm + 17] = ' ';
	X[rm + 10][cm + 18] = ' ';
	X[rm + 10][cm + 19] = ' ';
}*/
/*
void hdeadhmonster(char X[][203], int& rm, int& cm, int& s)
{

	if (s < 15)
	{
		cm -= 2;

	}
	if (s > 15)
	{
		cm += 2;

	}

	if (s >= 30) {
		s = 1;
		//h = s;
	}
}*/
void hbird(char X[][203], int& rbird, int& cbird, int& m) {

	if (m < 6) {
		cbird -= 2;
		rbird += 2;
	}

	if (m >= 6 && m < 12)
	{
		cbird += 2;
		rbird += 2;

	}
	if (m >= 12 && m < 18)
	{
		rbird -= 2;
		cbird += 2;
	}
	if (m >= 18 && m < 24)
	{
		rbird -= 2;
		cbird -= 2;
	}
	m += 2;
	if (m == 24) {
		m = 0;
	}
}
void hbird2(char X[][203], int& rbird2, int& cbird2, int& m2) {

	if (m2 < 6) {
		cbird2 -= 2;
		rbird2 += 2;
	}

	if (m2 >= 6 && m2 < 12)
	{
		cbird2 += 2;
		rbird2 += 2;

	}
	if (m2 >= 12 && m2 < 18)
	{
		rbird2 -= 2;
		cbird2 += 2;
	}
	if (m2 >= 18 && m2 < 24)
	{
		rbird2 -= 2;
		cbird2 -= 2;
	}
	m2 += 2;
	if (m2 == 24) {
		m2 = 0;
	}
}
void hmonster(char X[][203], int& rm, int& cm, int& s)
{

	if (s < 15)
	{
		cm -= 2;

	}
	if (s > 15)
	{
		cm += 2;

	}

	if (s >= 30) {
		s = 1;
		//h = s;
	}





}
void cloud2(char X[][203], int& rcloud2, int& ccloud2)
{
	X[rcloud2][ccloud2] = '.';
	X[rcloud2][ccloud2 + 1] = '-';
	X[rcloud2][ccloud2 + 2] = '~';
	X[rcloud2][ccloud2 + 3] = '~';
	X[rcloud2][ccloud2 + 4] = '-';
	X[rcloud2][ccloud2 + 5] = '(';
	X[rcloud2 - 1][ccloud2 + 6] = '.';
	X[rcloud2 - 1][ccloud2 + 7] = '-';
	X[rcloud2 - 1][ccloud2 + 8] = '~';
	X[rcloud2 - 1][ccloud2 + 9] = '~';
	X[rcloud2 - 1][ccloud2 + 10] = '~';
	X[rcloud2 - 1][ccloud2 + 11] = '-';
	X[rcloud2 - 1][ccloud2 + 12] = '.';
	X[rcloud2][ccloud2 + 13] = ')';
	X[rcloud2][ccloud2 + 14] = '_';
	X[rcloud2][ccloud2 + 15] = '_';
	X[rcloud2 + 1][ccloud2 + 17] = '~';
	X[rcloud2 + 1][ccloud2 + 18] = '-';
	X[rcloud2 + 1][ccloud2 + 19] = '.';
	X[rcloud2 + 1][ccloud2 - 1] = '/';
	X[rcloud2 + 2][ccloud2 - 2] = '|';
	X[rcloud2 + 2][ccloud2 + 20] = '\\';
	X[rcloud2 + 3][ccloud2 - 1] = '\\';
	X[rcloud2 + 3][ccloud2 + 19] = '.';
	X[rcloud2 + 3][ccloud2 + 20] = 39;
	X[rcloud2 + 4][ccloud2 + 1] = '~';
	X[rcloud2 + 4][ccloud2 + 2] = '-';
	X[rcloud2 + 4][ccloud2 + 4] = '.';
	X[rcloud2 + 4][ccloud2 + 5] = '_';
	X[rcloud2 + 4][ccloud2 + 6] = '_';
	X[rcloud2 + 4][ccloud2 + 7] = '_';
	X[rcloud2 + 4][ccloud2 + 8] = '_';
	X[rcloud2 + 4][ccloud2 + 9] = '_';
	X[rcloud2 + 4][ccloud2 + 10] = '_';
	X[rcloud2 + 4][ccloud2 + 11] = '_';
	X[rcloud2 + 4][ccloud2 + 12] = '_';
	X[rcloud2 + 4][ccloud2 + 13] = '_';
	X[rcloud2 + 4][ccloud2 + 14] = '.';
	X[rcloud2 + 4][ccloud2 + 16] = '-';
	X[rcloud2 + 4][ccloud2 + 17] = '~';

}
void cloud(char X[][203], int& rcloud, int& ccloud) {
	X[rcloud][ccloud] = '.';
	X[rcloud][ccloud + 1] = '-';
	X[rcloud][ccloud + 2] = '~';
	X[rcloud][ccloud + 3] = '~';
	X[rcloud][ccloud + 4] = '-';
	X[rcloud][ccloud + 5] = '(';
	X[rcloud - 1][ccloud + 6] = '.';
	X[rcloud - 1][ccloud + 7] = '-';
	X[rcloud - 1][ccloud + 8] = '~';
	X[rcloud - 1][ccloud + 9] = '~';
	X[rcloud - 1][ccloud + 10] = '~';
	X[rcloud - 1][ccloud + 11] = '-';
	X[rcloud - 1][ccloud + 12] = '.';
	X[rcloud][ccloud + 13] = ')';
	X[rcloud][ccloud + 14] = '_';
	X[rcloud][ccloud + 15] = '_';
	X[rcloud + 1][ccloud + 17] = '~';
	X[rcloud + 1][ccloud + 18] = '-';
	X[rcloud + 1][ccloud + 19] = '.';
	X[rcloud + 1][ccloud - 1] = '/';
	X[rcloud + 2][ccloud - 2] = '|';
	X[rcloud + 2][ccloud + 20] = '\\';
	X[rcloud + 3][ccloud - 1] = '\\';
	X[rcloud + 3][ccloud + 19] = '.';
	X[rcloud + 3][ccloud + 20] = 39;
	X[rcloud + 4][ccloud + 1] = '~';
	X[rcloud + 4][ccloud + 2] = '-';
	X[rcloud + 4][ccloud + 4] = '.';
	X[rcloud + 4][ccloud + 5] = '_';
	X[rcloud + 4][ccloud + 6] = '_';
	X[rcloud + 4][ccloud + 7] = '_';
	X[rcloud + 4][ccloud + 8] = '_';
	X[rcloud + 4][ccloud + 9] = '_';
	X[rcloud + 4][ccloud + 10] = '_';
	X[rcloud + 4][ccloud + 11] = '_';
	X[rcloud + 4][ccloud + 12] = '_';
	X[rcloud + 4][ccloud + 13] = '_';
	//X[rcloud + 4][ccloud + 14] = '_';
	X[rcloud + 4][ccloud + 14] = '.';
	X[rcloud + 4][ccloud + 16] = '-';
	X[rcloud + 4][ccloud + 17] = '~';

}
void hcloud(char X[][203], int& rcloud, int& ccloud, int& fc, int& ftc, int& bc) {
	if (fc == 1) {
		ccloud -= 2;
		ftc++;
	}
	if (ftc == 70) {
		fc = 2;
	}
	if (ftc == 0) {
		fc = 1;
	}
	if (fc == 2) {
		ccloud += 2;
		ftc--;
	}
	if (ftc == 10) {
		fc = 1;
	}
	/*
	ccloud += 3;
	fc++;
	if (fc == 30) {
		bc = 1;
		fc = -30;
	}
	*/

}
void hcloud2(char x[][203], int& RCLOUD2, int& ccloud2, int& fc2, int& ftc2)
{

	if (fc2 == 1) {
		ccloud2 -= 2;
		ftc2++;
	}
	if (ftc2 == 70) {
		fc2 = 2;
	}
	if (ftc2 == 0) {
		fc2 = 1;
	}
	if (fc2 == 2) {
		ccloud2 += 2;
		ftc2--;
	}
	if (ftc2 == 10) {
		fc2 = 1;
	}
	/*ccloud2 += 3;
	fc2++;
	if (fc2 == 30) {
		bc2 = 1;
		fc2 = -30;
	}
	*/

}
void birdbullet(char X[][203], int& rbullet, int& cbullet, int rbird, int cbird)
{
	rbullet = rbird;
	cbullet = cbird + 1;

	X[rbullet][cbullet] = 126;
}
void harakbirdbullet(char X[][203], int& cbullet, int rbullet)
{

	cbullet -= 2;
	X[rbullet][cbullet] = 126;
	X[rbullet][cbullet + 1] = ' ';
	X[rbullet][cbullet + 2] = ' ';

}
void dragonbulletr(char X[][203], int rdragon, int  cdragon, char lmv, char& lb, int& rbullet, int& cbullet)//mnew
{
	//X[rdragon - 3][cdragon + 10]
	rbullet = rdragon - 2;
	cbullet = cdragon + 10;

	X[rbullet][cbullet] = 15;
}
void harakdragonbullet(char X[][203], int& rdbullet, int& cdbullet, int ct2, int& ctdbullet, int& ct, int& ctdbulletdiro, int& checkdbullet)
{
	if (checkdbullet == 0)
	{
		if (ctdbullet < 35)
		{
			cdbullet++;
			X[rdbullet][cdbullet] = 126;
			X[rdbullet][cdbullet - 1] = ' ';
			ctdbullet++;
		}
		if (ctdbullet > 35)
			ctdbulletdiro = 0;

	}

}
void killlbat(char X[][203], int& cdbullet, int& cbat, int& xx)// new now
{
	if (cdbullet == cbat || cdbullet == cbat + 1 || cdbullet == cbat + 2)
	{
		xx = 1;
	}

}
void main()
{
	char X[51][203];
	int rEnmyg = 44;
	int cEnmyg = 40;
	int rHero = 49;
	int cHero = 88;
	int robstacle1 = 26;
	int cobstacle1 = 60;
	int robstacle2 = 26;
	int cobstacle2 = 130;
	int rbutton = 49;
	int cbutton = 80;
	int rdragon = 31;
	int cdragon = 115;
	char lmv = 'o';
	char hb;
	char blmv = 'o';
	char lb = ' ';
	int rbullet = NULL;
	int cbullet = NULL;
	int ct2 = NULL;
	int ct = 0;
	int a = 2;
	int i = 5;
	int ob2f = 0;
	int rladder = 49;
	int cladder = 7;
	int ctbullet = 0;
	int ctbulletdiro = 0;
	int ctbulletdirr = 0;
	int ctenmydie = 0;
	char bulletflag = 'o';
	int relev = 49;
	int celev = 150;
	int checkbullet = 0;
	int rbat = 26;
	int cbat = 175;
	int rbomb = 5;
	int cbomb = 30;
	int yf = 1;
	int cb = 1;
	int ctb = 0;
	int gs = 1;
	int cgs = 0;
	int bd = 0;
	int bc = 0;
	int rlaser = 26;
	int claser = 70;
	int ctlaser = 0;
	int rbird = 5;
	int cbird = 180;
	int rbird2 = 7;
	int cbird2 = 170;
	int rm = 15;
	int cm = 55;
	int m = 0;
	int m2 = 0;
	int rcloud = 2;
	int ccloud = 150;
	int rcloud2 = 5;
	int ccloud2 = 170;
	int fc = 0;
	int fc2 = 0;
	int bc2 = 0;
	int ftc = 0;
	int s = 1;
	char scrol = 'd';
	int rbu[30];
	int cbu[30];
	int b = 0;
	int rbirdbullet = NULL;
	int cbirdbullet = NULL;
	int ctbirdbullet = 0;
	int rbirdbullet2 = NULL;
	int cbirdbullet2 = NULL;
	int cthh = 3;
	int k = 0;//// kill monster
	int hm = 3;
	int rdbullet = NULL;
	int cdbullet = NULL;
	int ctdbullet = NULL;
	int ctdbulletdiro = 0;
	int checkdbullet = 0;
	int ftc2 = 0;
	int kk = 0;
	int v = 0;
	int xx = 0;
	char dirflag=NULL;
	for (;;)
	{
		for (; !_kbhit();)
		{
			Ersem(X, cladder);
			if (ctenmydie == 0)
				enemyg(X, rEnmyg, cEnmyg);
			/////////////////////////////////////////////////////////////

			if (lmv == 'o')//original pos
			{
				ersmhero(X, rHero, cHero);
				blmv = lmv;


			}
			if (lmv == 'r')//reversed pos
			{
				ersmheror(X, rHero, cHero);
				blmv = lmv;
				bulletflag = 'r';
			}
			if (lmv == 's')
			{
				ersmhero(X, rHero, cHero);
				blmv = lmv;
				lmv = 'o';
				bulletflag = 'o';


			}
			if (lmv == 'w')
			{
				ersmherow(X, rHero, cHero);
				blmv = lmv;
				bulletflag = 'o';

				lmv = 'o';

			}
			if (lmv == 'd')
			{
				ersmherod(X, rHero, cHero);
				blmv = lmv;
				lmv = 'o';

				bulletflag = 'o';

			}
			if (lmv == 'a')
			{
				ersmheroa(X, rHero, cHero);
				blmv = lmv;
				lmv = 'r';
				bulletflag = 'r';


			}
			if (lmv != 'a' && lmv != 's' && lmv != 'd' && lmv != 'w' && lmv != 'o' && lmv != 'r')
			{
				if (blmv == 'o')
				{
					ersmhero(X, rHero, cHero);
				}
				if (blmv == 'r')
				{
					ersmheroa(X, rHero, cHero);
				}

			}


			if (ct != 0)
			{
				if (ctbulletdiro == 0 && ctbulletdirr == 0)
				{
					if (bulletflag == 'o')
						ctbulletdiro++;
					if (bulletflag == 'r')
						ctbulletdirr++;
				}
				if (ctbulletdiro > 0)
					harakbullet(X, rbullet, cbullet, ct2, ctbullet, ct, ctbulletdiro, checkbullet);
				if (ctbulletdirr > 0)
					harakbulletr(X, rbullet, cbullet, ct2, ctbullet, ctbulletdirr, checkbullet);

			}


			//ersmobstacle1(X, robstacle1, cobstacle1);
			ersmobstacle2(X, robstacle2, cobstacle2, ob2f);
			ersmbutton(X, rbutton, cbutton);
			ersmdragon(X, rdragon, cdragon);
			button(X, cHero, rHero, cbutton, rbutton);
			Harakobstacle2(X, rHero, cHero, rbutton, cbutton, robstacle2, cobstacle2, a, i, ob2f);
			groundcheck(X, rHero, cHero, cladder, rladder);
			ersemladder(X, rladder, cladder);
			killenemyg(X, rEnmyg, cEnmyg, rbullet, cbullet, ctbullet, ctenmydie, checkbullet);
			elev(X, relev, celev);
			elevm(X, relev, celev, cdragon, rdragon, yf);
			ersmobstacle1(X, robstacle1, cobstacle1);
			ersmbat(X, rbat, cbat);
			harakbat(X, rbat, cbat, cb, ctb, rbomb, cbomb, bd);
			laser(X, rlaser, claser, ctlaser);
			bird(X, rbird, cbird);
			bird2(X, rbird2, cbird2);
			if (k == 0) {
				ersmmonster(X, rm, cm);
			}
			hbird(X, rbird, cbird, m);
			hbird2(X, rbird2, cbird2, m2);
			cloud(X, rcloud, ccloud);
			hmonster(X, rm, cm, s);
			hcloud(X, rcloud, ccloud, fc, ftc, bc);
			cloud2(X, rcloud2, ccloud2);
			hcloud2(X, rcloud2, ccloud2, fc2, ftc2);
			henmyg(X, rEnmyg, cEnmyg, gs, cgs, cHero, cthh);
			harakdragonbullet(X, rdbullet, cdbullet, ct2, ctdbullet, ct, ctdbulletdiro, checkdbullet);
			if (xx == 0) {
				ersmbat(X, rbat, cbat);
			}//new now
			killlbat(X, cdbullet, cbat, xx);
			/*	killmonster(X, cbullet, cm, k, hm);
				if (hm == 0) {
					deadmonster(X, rm, cm);
				}
				*/
			s++;
			if (s == 30)
			{
				s = 1;

			}
			kk++;
			if (kk >= 30 && kk <= 45)
			{
				if (rbomb < 25)
				{
					if (v == 0)
					{

						harakbomb(X, rbat, cbat, rbomb, cbomb, bc);
						v++;
					}
					v = 0;
				}

			}





			if (rbomb == 24) {
				rbomb = 0;
				kk = 0;
			}
			ctbirdbullet++;
			if (ctbirdbullet > 30)
			{
				birdbullet(X, rbirdbullet, cbirdbullet, rbird, cbird);
				birdbullet(X, rbirdbullet2, cbirdbullet2, rbird2, cbird2);
				ctbirdbullet = 0;
			}
			harakbirdbullet(X, cbirdbullet, rbirdbullet);
			harakbirdbullet(X, cbirdbullet2, rbirdbullet2);



			//Disp(X, rHero, cHero);
			if (scrol == 'h')
			   Dispshero(X, rHero, cHero);
		   if (scrol == 'd')
			   Dispsdragon(X, rdragon, cdragon);

		// ct = 0;
			if (cthh == 0)
			{
				break;
			}
		}
		char ch = _getch();
		if (ch == 'z')
		{
			if (bulletflag == 'o')
			{
				herobullet(X, rHero, cHero, lmv, lb, rbullet, cbullet);
				checkbullet = 0;
			}
			if (bulletflag == 'r')
			{
				herobulletr(X, rHero, cHero, lmv, lb, rbullet, cbullet);
				checkbullet = 0;
			}
			ct++;
			ctbullet = 0;
			ctbulletdiro = 0;
			ctbulletdirr = 0;

		}
		if (ch == 'm')
		{
			if (scrol == 'h')
			{
				scrol = 'd';
			}
			else
			{
				scrol = 'h';
			}
		}
		//ladder(X, rladder, cladder, rHero, cHero, ch);
		Harakdragon(X, rdragon, cdragon, ch, lmv, cthh);
		HarakHero(X, rHero, cHero, ch, lmv, cthh,dirflag);
		//ersmhero(X, rHero, cHero);

	}
}
