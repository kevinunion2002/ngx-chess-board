import { CdkDragEnd, CdkDragStart } from '@angular/cdk/drag-drop';
import { ElementRef, EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BoardLoader } from './board-state-provider/board-loader';
import { BoardStateProvider } from './board-state-provider/board-state-provider';
import { MoveStateProvider } from './board-state-provider/move-state-provider';
import { CoordsProvider } from './coords/coords-provider';
import { DrawPoint } from './drawing-tools/draw-point';
import { DrawProvider } from './drawing-tools/draw-provider';
import { HistoryMove } from './history-move-provider/history-move';
import { HistoryMoveProvider } from './history-move-provider/history-move-provider';
import { Board } from './models/board';
import { Piece } from './models/pieces/piece';
import { Point } from './models/pieces/point';
import { NgxChessBoardView } from './ngx-chess-board-view';
import { PiecePromotionModalComponent } from './piece-promotion-modal/piece-promotion-modal.component';
import { NgxChessBoardService } from './service/ngx-chess-board.service';
import { PieceIconInput } from './utils/inputs/piece-icon-input';
import { PieceIconInputManager } from './utils/inputs/piece-icon-input-manager';
import * as i0 from "@angular/core";
export interface MoveChange extends HistoryMove {
    check: boolean;
    stalemate: boolean;
    checkmate: boolean;
    fen: string;
    freeMode: boolean;
}
export declare class NgxChessBoardComponent implements OnInit, OnChanges, NgxChessBoardView {
    private ngxChessBoardService;
    darkTileColor: string;
    lightTileColor: string;
    showCoords: boolean;
    dragDisabled: boolean;
    drawDisabled: boolean;
    lightDisabled: boolean;
    darkDisabled: boolean;
    /**
     * Enabling free mode removes turn-based restriction and allows to move any piece freely!
     */
    freeMode: boolean;
    moveChange: EventEmitter<MoveChange>;
    checkmate: EventEmitter<void>;
    stalemate: EventEmitter<void>;
    pieceSize: number;
    selected: boolean;
    boardRef: ElementRef;
    modal: PiecePromotionModalComponent;
    board: Board;
    boardStateProvider: BoardStateProvider;
    moveStateProvider: MoveStateProvider;
    moveHistoryProvider: HistoryMoveProvider;
    boardLoader: BoardLoader;
    coords: CoordsProvider;
    disabling: boolean;
    drawProvider: DrawProvider;
    drawPoint: DrawPoint;
    pieceIconManager: PieceIconInputManager;
    constructor(ngxChessBoardService: NgxChessBoardService);
    heightAndWidth: number;
    set size(size: number);
    set pieceIcons(pieceIcons: PieceIconInput);
    onRightClick(event: MouseEvent): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    onMouseUp(event: MouseEvent): void;
    onPieceClicked(pieceClicked: any, pointClicked: any): void;
    /**
     * Validates whether freemode is turned on!
     */
    isFreeMode(): boolean;
    /**
     * Processes logic to allow freeMode based logic processing
     */
    onFreeMode(pieceClicked: any): void;
    afterMoveActions(promotionIndex?: number): void;
    disableSelection(): void;
    prepareActivePiece(pieceClicked: Piece, pointClicked: Point): void;
    getPieceByPoint(row: number, col: number): Piece;
    isKingChecked(piece: Piece): boolean;
    getClickPoint(event: any): Point;
    movePiece(toMovePiece: Piece, newPoint: Point, promotionIndex?: number): void;
    checkIfPawnFirstMove(piece: Piece): void;
    checkForPawnPromote(toPromotePiece: Piece, promotionIndex?: number): boolean;
    openPromoteDialog(piece: Piece): void;
    resolvePromotionChoice(piece: Piece, index: number): void;
    reset(): void;
    reverse(): void;
    updateBoard(board: Board): void;
    undo(): void;
    getMoveHistory(): HistoryMove[];
    setFEN(fen: string): void;
    getFEN(): string;
    dragEnded(event: CdkDragEnd): void;
    dragStart(event: CdkDragStart): void;
    onMouseDown(event: MouseEvent): void;
    getDrawingPoint(x: number, y: number, crtl: boolean, alt: boolean, shift: boolean): DrawPoint;
    private checkIfRookMoved;
    private checkIfKingMoved;
    private checkForPossibleMoves;
    private checkForPat;
    private checkIfPawnEnpassanted;
    private checkIfPawnTakesEnPassant;
    private saveClone;
    private saveMoveClone;
    private calculatePieceSize;
    private increaseFullMoveCount;
    private handleClickEvent;
    private addDrawPoint;
    move(coords: string): void;
    getCustomPieceIcons(piece: Piece): any;
    private isPieceDisabled;
    static ɵfac: i0.ɵɵFactoryDef<NgxChessBoardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NgxChessBoardComponent, "ngx-chess-board", never, { "darkTileColor": "darkTileColor"; "lightTileColor": "lightTileColor"; "showCoords": "showCoords"; "dragDisabled": "dragDisabled"; "drawDisabled": "drawDisabled"; "lightDisabled": "lightDisabled"; "darkDisabled": "darkDisabled"; "freeMode": "freeMode"; "size": "size"; "pieceIcons": "pieceIcons"; }, { "moveChange": "moveChange"; "checkmate": "checkmate"; "stalemate": "stalemate"; }, never, never>;
}
